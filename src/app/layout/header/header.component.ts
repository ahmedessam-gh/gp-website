import { style } from '@angular/animations';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  HostBinding,
  ViewChild,
  Renderer2,
  ElementRef,
  OnChanges,
} from '@angular/core';
import { ProdService } from 'src/app/core/services/prod.service';
import { Prod } from 'src/app/core/interfaces/Prod';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HeaderService } from 'src/app/core/services/header.service';
import { cart } from '../../core/interfaces/cart';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Location } from '@angular/common';
import { product } from 'src/app/core/interfaces/product';
import { SearchService } from 'src/app/core/services/search.service';
import { HttpParams } from '@angular/common/http';
import { auditTime, debounceTime } from 'rxjs/operators';
import { orderDetails } from 'src/app/core/interfaces/orderDetails';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  productid: string;
  isScrolled = false;
  searchText: string = '';
  showSearch = false;
  isFixed: boolean;
  showSuggetions = true;
  showResults = false;
  searchQuery = '';
  cartProducts: any[] = [];
  newProd: any;
  shopFilter: string = '';
  collapsed = true;
  nativeElement: any;
  userList = false;
  searchedProd: Array<{ product: any }>;
  searchNone: string = '';
  newFilter: any;
  count: any;
  genderParam: string;
  prodLength: any;
  categoryFIlter: string = '';
  categoryParam: string;
  categories: any;
  searchFilter: any;
  newArrival: Array<{ product: any }>;
  toggler(): void {
    this.collapsed = !this.collapsed;
    const nav = document.getElementById('lower-nav');
    nav.classList.toggle('white-nav');
  }

  constructor(
    private search: SearchService,
    private route: ActivatedRoute,
    private router: Router,
    public header: HeaderService,
    private renderer: Renderer2,
    private elementrf: ElementRef,
    private cart: CartService,
    private auth: AuthService,
    private location: Location,
    private prod: ProdService,
    private customer: CustomerService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prod.getArrival().subscribe((data) => {
      this.newArrival = data.productsWithAvgRates;
    });
    // this.customer.refetchAfterCartDeletion$().subscribe(() => {
    //   console.log('all cart has been deleted');
    //   this.getCart();
    //   console.log(this.cartProducts);
    // });
    this.cart.refetchAfterDeletion$().subscribe(() => {
      this.getCart();
    });
    this.customer.refetchData$().subscribe(() => {
      this.getCart();
    });
    this.showUserList();
    this.getAllCategories();
    this.getCart();
  }
  getCart() {
    this.cart.viewCart().subscribe(
      (data) => {
        this.cartProducts = data['carts'];
        console.log(this.cartProducts.length);
      },
      (error) => {
        if (error.status == 400) {
          this.cartProducts = [];
          console.log('no products in your cart');
          return;
        }
      }
    );
  }
  // setFilter(genderFilter, categoryFilter) {
  //   this.shopFilter = genderFilter;
  //   this.categoryFIlter = categoryFilter;

  //   let params = new HttpParams().set('Gender', this.shopFilter);
  //   if (this.categoryFIlter !== '') {
  //     params = params.set('Category', this.categoryFIlter);
  //   }

  //   this.categoryParam = params.get('Category');
  //   this.genderParam = params.get('Gender');
  //   localStorage.setItem('gender', this.genderParam);
  //   localStorage.setItem('category', this.categoryParam);
  //   this.activatedRoute.queryParamMap.subscribe((param) => {
  //     this.genderParam = param['type'];
  //     console.log(this.genderParam);
  //     this.prod.getShop(params).subscribe((data) => {
  //       this.newFilter = data.productsWithAvgRates;
  //       this.count = data.count;
  //       console.log(this.count);
  //       console.log(this.newFilter);

  //       const serializedData = JSON.stringify(this.newFilter);
  //       localStorage.setItem('data', serializedData);

  //       const countData = JSON.stringify(this.count);
  //       localStorage.setItem('count', countData);
  //     });
  //   });
  // }

  showUserList() {
    if (this.auth.getUser()) {
      this.userList = true;
    }
  }
  logOut() {
    this.auth.logOut();
    // this.router.navigate(['']);
    this.router.navigate(['']).then(()=>{
      window.location.reload();
    });
    this.userList = false;
  }
  changeColor() {
    const nav = document.getElementById('lower-nav');
    nav.classList.toggle('white-nav');
  }

  // styling() {
  //   const para = this.elementrf.nativeElement.querySelector('nav');
  //   this.renderer.addClass(para,'navbar');
  //   console.log(para);
  // }
  searchContainer() {
    const search_container = document.querySelector('.search-container');
    search_container?.classList.add('activeSearchcontainer');
    document.body.children[0].classList.add('layout');

  }
  changeProd(product: Prod) {
    // this.router.navigate(['/shop/product',product.id]);
  }
  removeContainer() {
    if (!this.showSearch) {
      const search_container = document.querySelector('.search-container');

      search_container?.classList.remove('activeSearchcontainer');
      // document.body.children[0].addEventListener('click',()=>{
      //   search_container?.classList.remove('activeSearchcontainer');
      // });
      this.searchText = '';
      this.showSuggetions = true;
      this.showResults = false;
      document.body.children[0].classList.remove('layout');


    }
    // this.router.navigate(['/shop/product',prod.id])
  }

  onSearchInput() {
    const params = new HttpParams().set('searchTerm', this.searchText);

    if (this.searchText === '') {
      this.showSuggetions = true;
      this.showResults = false;
    } else {
      this.showSuggetions = false;
      this.showResults = true;
      this.prod
        .getShop(params)

        // Adjust the delay duration as needed (in milliseconds)
        .subscribe(
          (data) => {
            this.searchedProd = data.productsWithAvgRates;
            console.log(this.searchedProd);
            this.prodLength = this.searchedProd.length;
            console.log(this.prodLength);
          },
          (error) => {
            this.searchNone = error.error;
            console.log(this.searchNone);
          }
        );
    }
  }
  getAllCategories() {
    this.prod.getCategory().subscribe((data) => {
      console.log(data);
      this.categories = data;
    });
  }

  getSearch(SearchText) {
    this.searchFilter = SearchText;
    localStorage.setItem('search', this.searchFilter);
  }
}
