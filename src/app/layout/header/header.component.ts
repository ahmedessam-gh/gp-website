import { style } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding,ViewChild, Renderer2, ElementRef } from '@angular/core';
import { ProdService } from 'src/app/core/services/prod.service';
import { Prod } from 'src/app/core/interfaces/Prod';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  productid:string;
  isScrolled = false;
  searchText = '';
  showSearch = false;
  isFixed: boolean;
  showSuggetions = true;
  showResults = false;
  searchQuery = '';
  myProd: Prod[];
  newProd:any;
  collapsed = true;
  nativeElement: any;
  ActivatedRoute: any;

  toggler(): void {
    this.collapsed = !this.collapsed;
  }

  constructor(private prod: ProdService,private route:ActivatedRoute, private router: Router, public header: HeaderService,private renderer:Renderer2,private elementrf:ElementRef) { }
  ngOnInit(): void {

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
   changeProd(product:Prod){
    
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
    if (this.searchText === '') {
      this.showSuggetions = true;
      this.showResults = false;
    } else {
      this.showSuggetions = false;
      this.showResults = true;
    }
  }
  ngOnDestroy() {
  }
}
