import { style } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProdService } from 'src/app/core/services/prod.service';
import { Prod } from 'src/app/core/interfaces/Prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchText: any;
  myProd?: Prod[];
  collapsed = true;
  toggler(): void {
    this.collapsed = !this.collapsed;
  }

  constructor(private prod: ProdService) {}
  ngOnInit(): void {
    this.myProd = this.prod.product;
  }

  searchContainer() {
    const search_container = document.querySelector('.search-container');
    search_container?.classList.add('activeSearchcontainer');
  }

  removeContainer() {
    const search_container = document.querySelector('.search-container');
    const search_add = document.querySelector('searh-suggesions');
    const search_remove = document.querySelector('search-results');
    search_container?.classList.remove('activeSearchcontainer');

    search_add?.classList.remove('activeSearch-suggesions');
    search_remove?.classList.remove('activeSearchresults');
  }

  searchResults() {
    const search_suggestions = document.querySelector('.search-suggesions');
    const search_results = document.querySelector('.search-results');
    search_suggestions?.classList.add('activeSearch-suggesions');
    search_results?.classList.add('activeSearchresults');
  }

  searchRemove() {}
}
