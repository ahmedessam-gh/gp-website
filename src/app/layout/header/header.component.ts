import { style } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProdService } from 'src/app/core/services/prod.service';
import { Prod } from 'src/app/core/interfaces/Prod';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchText = '';
  showSearch = false;

  showSuggetions = true;
  showResults = false;
  searchQuery = '';
  myProd?: Prod[];
  collapsed = true;
  toggler(): void {
    this.collapsed = !this.collapsed;
  }

  constructor(private prod: ProdService, private router: Router) {}
  ngOnInit(): void {
    this.myProd = this.prod.product;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showSearch = false;
      }
    });
  }

  searchContainer() {
    const search_container = document.querySelector('.search-container');
    search_container?.classList.add('activeSearchcontainer');
  }

  removeContainer() {
    if (!this.showSearch) {
      const search_container = document.querySelector('.search-container');

      search_container?.classList.remove('activeSearchcontainer');
    }
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
}
