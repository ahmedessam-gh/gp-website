import { Component, HostListener, OnDestroy, OnInit, Renderer2, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
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
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit,OnDestroy,AfterViewInit{
  // @ViewChild(HeaderComponent) header:HeaderComponent;
  newProds: Prod[] = [];
  favouriteList: any = [];
  removeScroll = false;
  constructor(private elementRef: ElementRef,private renderer:Renderer2,private prod: ProdService, private cart: CartService ,private router:Router , public headerHome:HeaderService) {
    this.headerHome.navPosition = "fixed";

  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    const applyScrollStyling = scrollPosition > 200;
    this.headerHome.setApplyScrollStyling(applyScrollStyling);
    if(!applyScrollStyling){
      this.renderer.addClass(this.elementRef.nativeElement.parentElement.parentElement.querySelector('nav'),'returnPad');
      this.renderer.setStyle(this.elementRef.nativeElement.parentElement.parentElement.querySelector('nav'),'background','transparent');

    }else{
      this.renderer.removeClass(this.elementRef.nativeElement.parentElement.parentElement.querySelector('nav'),'returnPad');
      this.renderer.setStyle(this.elementRef.nativeElement.parentElement.parentElement.querySelector('nav'),'background','white');

    }

  }
  ngAfterViewInit(){
    console.log(this.elementRef.nativeElement.parentElement.parentElement.querySelector('nav'));
  }
  ngOnInit(): void {
    this.newProds = this.prod.product;
    Aos.init({});
    this.favouriteList = this.prod.getFav();
    console.log(this.favouriteList);
    // this.getFavourites();
    this.onWindowScroll();
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



  ngOnDestroy(){
    this.headerHome.navPosition = "sticky";
    this.headerHome.setApplyScrollStyling(true);
    this.renderer.removeClass(this.elementRef.nativeElement.parentElement.parentElement.querySelector('nav'),'returnPad');
    this.renderer.setStyle(this.elementRef.nativeElement.parentElement.parentElement.querySelector('nav'),'background','white');
  }
}
