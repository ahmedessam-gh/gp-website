import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  collapsed = true;
  toggler():void{
    this.collapsed = !this.collapsed;
  }

  constructor() { }
  ngOnInit(): void {


}

searchContainer(){

  const search_container= document.querySelector('.search-container');
  search_container?.classList.add('activeSearchcontainer');



}

removeContainer(){
  const search_container= document.querySelector('.search-container');

  search_container?.classList.remove('activeSearchcontainer')
  const body = document.body.style.filter='blur(0px)'



}

searchResults(){
const search_suggestions = document.querySelector('.search-suggesions')
  const search_results = document.querySelector('.search-results');
  search_suggestions?.classList.add('activeSearch-suggesions')
  search_results?.classList.add('activeSearchresults')
}


}


