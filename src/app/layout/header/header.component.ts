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
import { debounceTime } from 'rxjs/operators';

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
  cartProducts: cart[] = [];
  newProd: any;
  collapsed = true;
  nativeElement: any;
  ActivatedRoute: any;
  userList = false;
  searchedProd: product[];
  searchNone: string = '';
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
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.cartProducts = this.cart.getCart();
    this.showUserList();
  }
  showUserList() {
    if (this.auth.getUser()) {
      this.userList = true;
    }
  }
  logOut() {
    this.auth.logOut();
    this.router.navigate(['']);
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
  }
  changeProd(product: Prod) {
    // this.router.navigate(['/shop/product',product.id]);
  }
  removeContainer() {
    if (!this.showSearch) {
      const search_container = document.querySelector('.search-container');

      search_container?.classList.remove('activeSearchcontainer');
      this.searchText = '';
      this.showSuggetions = true;
      this.showResults = false;
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
      this.search
        .getSearchProds(params)
        .pipe(debounceTime(5000)) // Adjust the delay duration as needed (in milliseconds)
        .subscribe(
          (data) => {
            this.searchedProd = data as product[];
            console.log(this.searchedProd);
          },
          (error) => {
            this.searchNone = error.error;
            console.log(this.searchNone);
          }
        );
    }
  }

  searchtexttest() {
    console.log(this.searchText);
  }
  ngOnDestroy() {}
}
