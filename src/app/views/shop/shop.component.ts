import { HttpParams } from '@angular/common/http';
import { Prod } from 'src/app/core/interfaces/Prod';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProdService } from 'src/app/core/services/prod.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import * as Aos from 'aos';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit, OnDestroy {
  newProds?: any;
  pageSize: number = 1;
  filterForm: FormGroup;
  showFilter: boolean = false;
  pageNumber: number = 1;
  sendPage: FormGroup;
  selectedOption: string;

  count?: number;
  searchTerm: string = '';
  filtered: boolean = false;
  localstorageData: string;
  localstorageNumber: string;
  localstoargeGender: string;
  localstoargeCategory: string;
  categories: any;

  constructor(
    private fb: FormBuilder,
    private prod: ProdService,
    private cart: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    Aos.init();
    this.filterForm = this.fb.group({
      type: [''],
      MinPrice: [''],
      MaxPrice: [''],
      category: [''],
    });
    this.getAllCategories();
    this.localstorageData = localStorage.getItem('data');
    this.localstoargeGender = localStorage.getItem('gender');
    this.localstoargeCategory = localStorage.getItem('category');
    if (this.localstorageData !== null) {
      this.newProds = JSON.parse(this.localstorageData);

      this.localstorageNumber = localStorage.getItem('count');
      this.count = JSON.parse(this.localstorageNumber);
      console.log(this.count);
      const genderParam = new HttpParams().get('Gender');
      console.log(genderParam);
    } else this.getProducts(this.pageNumber);
  }

  ngOnDestroy() {
    localStorage.removeItem('data');
    localStorage.removeItem('count');
    localStorage.removeItem('gender');
    localStorage.removeItem('category');
  }

  clearAllFilters() {
    this.filtered = true;
    this.pageNumber = 1;

    this.filterForm = this.fb.group({
      type: [''],
      MinPrice: [''],
      MaxPrice: [''],
      category: [''],
    });
    this.searchTerm = '';
    this.getProducts(this.pageNumber);
    $(document).ready(() => {
      $('#uncheck').click(() => {
        $('[type=radio], [type=checkbox').prop('checked', false);
      });
    });
  }

  getProducts(pageNum: number) {
    this.pageNumber = pageNum;
    let params = new HttpParams()
      .set('pageNumber', this.pageNumber)
      .set('pageSize', this.pageSize);

    if (this.filterForm.value['MaxPrice'] !== '') {
      params = params.set('MaxPrice', this.filterForm.value['MaxPrice']);
    }

    if (this.filterForm.value['MinPrice'] !== '') {
      params = params.set('MinPrice', this.filterForm.value['MinPrice']);
    }

    if (this.filterForm.value['category'] !== '') {
      params = params.set('Category', this.filterForm.value['category']);
    } else if (this.localstoargeCategory) {
      params = params.set('Category', this.localstoargeCategory);
    }
    if (this.filterForm.value['type'] !== '') {
      params = params.set('Gender', this.filterForm.value['type']);
    } else if (this.localstoargeGender) {
      params = params.set('Gender', this.localstoargeGender);
    }

    if (this.searchTerm !== '') {
      params = params.set('SearchTerm', this.searchTerm);
    }

    this.prod.getShop(params).subscribe(
      (data) => {
        this.newProds = data.productsWithAvgRates;
        this.count = data.count;
        console.log(this.count);
        this.filterForm = this.fb.group({
          type: [this.filterForm.value['type'] || ''],
          MinPrice: [this.filterForm.value['MinPrice'] || ''],
          MaxPrice: [this.filterForm.value['MaxPrice'] || ''],
          category: [this.filterForm.value['category'] || ''],
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.filtered = true;
    const filters = this.filterForm.value;
    this.pageNumber = 1;
    this.getProducts(this.pageNumber);
    console.log(filters);
  }
  openFilter() {
    this.showFilter = !this.showFilter;
  }

  getSearch() {
    this.pageNumber = 1;

    this.getProducts(this.pageNumber);
  }

  getAllCategories() {
    this.prod.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }
}
