import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as Aos from 'aos';
import { once } from 'events';
import { event } from 'jquery';
import { cart } from 'src/app/core/interfaces/cart';
import { Prod } from 'src/app/core/interfaces/Prod';
import { CartService } from 'src/app/core/services/cart.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { ProdService } from 'src/app/core/services/prod.service';
import { HeadFootComponent } from '../head-foot/head-foot.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { product } from 'src/app/core/interfaces/product';
import { HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  // @ViewChild(HeaderComponent) header:HeaderComponent;
  newProds;
  favouriteList: any = [];
  removeScroll = false;
  shopFilter: any;
  categoryFIlter: any;
  categoryParam: string;
  genderParam: string;
  newFilter: any;
  count: any;
  newArrival: any;
  param: HttpParams;
  userList: boolean;
  suggestedProds: any;
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private prod: ProdService,
    private cart: CartService,
    private router: Router,
    public headerHome: HeaderService,
    private auth: AuthService
  ) {
    this.headerHome.navPosition = 'fixed';
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    const applyScrollStyling = scrollPosition > 200;
    this.headerHome.setApplyScrollStyling(applyScrollStyling);
    if (!applyScrollStyling) {
      this.renderer.addClass(
        this.elementRef.nativeElement.parentElement.parentElement.querySelector(
          'nav'
        ),
        'returnPad'
      );
      this.renderer.setStyle(
        this.elementRef.nativeElement.parentElement.parentElement.querySelector(
          'nav'
        ),
        'background',
        'transparent'
      );
      this.elementRef.nativeElement.parentElement.parentElement
        .querySelectorAll('a.nav-line')
        .forEach((element) => {
          element.classList.add('link-white');
        });
      this.elementRef.nativeElement.parentElement.parentElement
        .querySelectorAll('.end-nav .header-icons fa-icon')
        .forEach((elem) => {
          elem.classList.add('header-icons-no-scroll');
        });
    } else {
      this.renderer.removeClass(
        this.elementRef.nativeElement.parentElement.parentElement.querySelector(
          'nav'
        ),
        'returnPad'
      );
      this.renderer.setStyle(
        this.elementRef.nativeElement.parentElement.parentElement.querySelector(
          'nav'
        ),
        'background',
        'white'
      );
      this.elementRef.nativeElement.parentElement.parentElement
        .querySelectorAll('a.nav-line')
        .forEach((element) => {
          element.classList.remove('link-white');
        });
      this.elementRef.nativeElement.parentElement.parentElement
        .querySelectorAll('.end-nav .header-icons fa-icon')
        .forEach((elem) => {
          elem.classList.remove('header-icons-no-scroll');
        });
    }
  }
  ngAfterViewInit() {
    // console.log(this.elementRef.nativeElement.parentElement.parentElement.querySelectorAll('.end-nav .header-icons fa-icon'));
  }
  ngOnInit(): void {
    this.prod.getArrival().subscribe((data) => {
      this.newArrival = data.productsWithAvgRates;
      if (Array.isArray(this.newArrival)) {
      }
    });

    this.prod.getRecommended().subscribe((data) => {
      this.suggestedProds = data;
    });

    this.showUserList();

    Aos.init({});
    this.favouriteList = this.prod.getFav();
    console.log(this.favouriteList);
    // this.getFavourites();
    this.onWindowScroll();
  }
  params(params: any) {
    throw new Error('Method not implemented.');
  }

  addToFav(newProd: Prod, event) {
    this.prod.addToFav(newProd, event);
    // this.getFavourites();
  }

  // getFavourites() {
  //   var favs = document.getElementsByClassName("favs");
  //   if(this.favouriteList.length==0){
  //     console.log('no items');
  //   }else{
  //     for(var i=0;i<favs.length;i++){
  //       for(var j=0;j<this.favouriteList.length;j++){
  //         if(Number(favs[i].id)==this.favouriteList[j].id){
  //           favs[i].classList.add('favIcon');
  //         }
  //       }
  //     }
  //   }
  //
  //
  //   // console.log(Number(favs[i].id))
  // //  console.log(this.favouriteList)
  // }

  ngOnDestroy() {
    this.headerHome.navPosition = 'sticky';
    this.headerHome.setApplyScrollStyling(true);
    this.renderer.removeClass(
      this.elementRef.nativeElement.parentElement.parentElement.querySelector(
        'nav'
      ),
      'returnPad'
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement.parentElement.parentElement.querySelector(
        'nav'
      ),
      'background',
      'white'
    );
    this.elementRef.nativeElement.parentElement.parentElement
      .querySelectorAll('a.nav-line')
      .forEach((element) => {
        element.classList.remove('link-white');
      });
    this.elementRef.nativeElement.parentElement.parentElement
      .querySelectorAll('.end-nav .header-icons fa-icon')
      .forEach((elem) => {
        elem.classList.remove('header-icons-no-scroll');
      });
  }
  showUserList() {
    if (this.auth.getUser()) {
      this.userList = true;
    } else this.userList = false;
  }
}
