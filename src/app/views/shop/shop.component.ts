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

    this.localstorageData = localStorage.getItem('data');
    this.localstoargeGender = localStorage.getItem('gender');
    if (this.localstorageData !== null) {
      this.newProds = JSON.parse(this.localstorageData);

      this.localstorageNumber = localStorage.getItem('count');
      this.count = JSON.parse(this.localstorageNumber);
      console.log(this.count);
      const genderParam = new HttpParams().get('Gender');
      console.log(genderParam);
    } else this.changePage(this.pageNumber);
  }

  ngOnDestroy() {
    localStorage.removeItem('data');
    localStorage.removeItem('count');
    localStorage.removeItem('gender');
  }

  clearAllFilters() {
    this.filtered = true;
    this.filterForm = this.fb.group({
      type: [''],
      MinPrice: [''],
      MaxPrice: [''],
      category: [''],
    });
    const params = new HttpParams()

      .set('pageNumber', this.pageNumber)
      .set('pageSize', this.pageSize)

      .set('MaxPrice', this.filterForm.value['MaxPrice'])
      .set('MinPrice', this.filterForm.value['MinPrice'])
      .set('Category', this.filterForm.value['category'])
      .set('SearchTerm', this.searchTerm);

    this.prod.getShop(params).subscribe((data) => {
      this.newProds = data.productsWithAvgRates;
      this.count = data.count;

      console.log(this.count);
      this.filterForm = this.fb.group({
        type: [''],
        MinPrice: [''],
        MaxPrice: [''],
        category: [''],
      });
    });
    $(document).ready(() => {
      $('#uncheck').click(() => {
        $('[type=radio], [type=checkbox').prop('checked', false);
      });
    });
  }

  onSubmit() {
    this.filtered = true;
    const filters = this.filterForm.value;
    if (
      this.filterForm.value['type'] == '' &&
      this.localstoargeGender != null
    ) {
      const params = new HttpParams()
        .set('Gender', this.localstoargeGender)
        .set('pageNumber', this.pageNumber)
        .set('pageSize', this.pageSize)
        .set('MaxPrice', this.filterForm.value['MaxPrice'])
        .set('MinPrice', this.filterForm.value['MinPrice'])
        .set('Category', this.filterForm.value['category'])
        .set('SearchTerm', this.searchTerm);

      this.prod.getShop(params).subscribe((data) => {
        this.newProds = data.productsWithAvgRates;
        this.count = data.count;

        console.log(this.newProds);
      });
      console.log(filters);
    } else if (
      this.filterForm.value['type'] != '' &&
      this.localstoargeGender != null
    ) {
      const params = new HttpParams()
        .set('Gender', this.filterForm.value['type'])
        .set('pageNumber', this.pageNumber)
        .set('pageSize', this.pageSize)
        .set('MaxPrice', this.filterForm.value['MaxPrice'])
        .set('MinPrice', this.filterForm.value['MinPrice'])
        .set('Category', this.filterForm.value['category'])
        .set('SearchTerm', this.searchTerm);

      this.prod.getShop(params).subscribe((data) => {
        this.newProds = data.productsWithAvgRates;
        this.count = data.count;

        console.log(this.newProds);
      });
      console.log(filters);
    } else if (
      this.filterForm.value['type'] != '' ||
      (this.filterForm.value['type'] == '' && this.localstoargeGender == null)
    ) {
      const params = new HttpParams()
        .set('Gender', this.filterForm.value['type'])
        .set('pageNumber', this.pageNumber)
        .set('pageSize', this.pageSize)
        .set('MaxPrice', this.filterForm.value['MaxPrice'])
        .set('MinPrice', this.filterForm.value['MinPrice'])
        .set('Category', this.filterForm.value['category'])
        .set('SearchTerm', this.searchTerm);

      this.prod.getShop(params).subscribe((data) => {
        this.newProds = data.productsWithAvgRates;
        this.count = data.count;

        console.log(this.newProds);
      });
      console.log(filters);
    }
  }
  openFilter() {
    this.showFilter = !this.showFilter;
  }

  changePage(pageNum: number) {
    this.pageNumber = pageNum;

    console.log(this.pageNumber);
    if (this.filtered == false && this.localstoargeGender == null) {
      const params = new HttpParams()
        .set('pageNumber', this.pageNumber)
        .set('pageSize', this.pageSize)
        .set('Gender', this.filterForm.value['type'])
        .set('Category', this.filterForm.value['category'])
        .set('MaxPrice', this.filterForm.value['MaxPrice'])
        .set('MinPrice', this.filterForm.value['MinPrice'])
        .set('SearchTerm', this.searchTerm);

      this.prod.getShop(params).subscribe((data) => {
        this.newProds = data.productsWithAvgRates;
        // this.count = this.newProds[0].count;
        this.count = data.count;

        this.filterForm = this.fb.group({
          type: [this.filterForm.value['type'] || ''],
          MinPrice: [this.filterForm.value['MinPrice'] || ''],
          MaxPrice: [this.filterForm.value['MaxPrice'] || ''],
          category: [this.filterForm.value['category'] || ''],
        });
        console.log(this.newProds);
      });
    } else if (this.filtered == false && this.localstoargeGender != null) {
      const params = new HttpParams()
        .set('pageNumber', this.pageNumber)
        .set('pageSize', this.pageSize)
        .set('Gender', this.localstoargeGender)
        .set('Category', this.filterForm.value['category'])
        .set('MaxPrice', this.filterForm.value['MaxPrice'])
        .set('MinPrice', this.filterForm.value['MinPrice'])
        .set('SearchTerm', this.searchTerm);

      this.prod.getShop(params).subscribe((data) => {
        this.newProds = data.productsWithAvgRates;
        // this.count = this.newProds[0].count;
        this.count = data.count;

        this.filterForm = this.fb.group({
          type: [this.filterForm.value['type'] || ''],
          MinPrice: [this.filterForm.value['MinPrice'] || ''],
          MaxPrice: [this.filterForm.value['MaxPrice'] || ''],
          category: [this.filterForm.value['category'] || ''],
        });
        console.log(this.newProds);
      });
    } else if (this.filtered == true && this.localstoargeGender != null) {
      const params = new HttpParams()
        .set('pageNumber', this.pageNumber)
        .set('pageSize', this.pageSize)
        .set('Gender', this.filterForm.value['type'])
        .set('Category', this.filterForm.value['category'])
        .set('MaxPrice', this.filterForm.value['MaxPrice'])
        .set('MinPrice', this.filterForm.value['MinPrice'])
        .set('SearchTerm', this.searchTerm);

      this.prod.getShop(params).subscribe((data) => {
        this.newProds = data.productsWithAvgRates;
        // this.count = this.newProds[0].count;
        this.count = data.count;

        this.filterForm = this.fb.group({
          type: [this.filterForm.value['type'] || ''],
          MinPrice: [this.filterForm.value['MinPrice'] || ''],
          MaxPrice: [this.filterForm.value['MaxPrice'] || ''],
          category: [this.filterForm.value['category'] || ''],
        });
        console.log(this.newProds);
      });
    } else if (this.filtered == true && this.localstoargeGender == null) {
      const params = new HttpParams()
        .set('pageNumber', this.pageNumber)
        .set('pageSize', this.pageSize)
        .set('Gender', this.filterForm.value['type'])
        .set('Category', this.filterForm.value['category'])
        .set('MaxPrice', this.filterForm.value['MaxPrice'])
        .set('MinPrice', this.filterForm.value['MinPrice'])
        .set('SearchTerm', this.searchTerm);

      this.prod.getShop(params).subscribe((data) => {
        this.newProds = data.productsWithAvgRates;
        // this.count = this.newProds[0].count;
        this.count = data.count;

        this.filterForm = this.fb.group({
          type: [this.filterForm.value['type'] || ''],
          MinPrice: [this.filterForm.value['MinPrice'] || ''],
          MaxPrice: [this.filterForm.value['MaxPrice'] || ''],
          category: [this.filterForm.value['category'] || ''],
        });
        console.log(this.newProds);
      });
    }
  }

  getSearch() {
    const params = new HttpParams()
      .set('Gender', this.filterForm.value['type'])
      .set('pageNumber', this.pageNumber)
      .set('pageSize', this.pageSize)
      .set('MaxPrice', this.filterForm.value['MaxPrice'])
      .set('MinPrice', this.filterForm.value['MinPrice'])
      .set('Category', this.filterForm.value['category'])
      .set('SearchTerm', this.searchTerm);

    this.prod.getShop(params).subscribe((data) => {
      this.newProds = data.productsWithAvgRates;
      this.count = data.count;

      console.log(this.newProds);
    });
  }
}
