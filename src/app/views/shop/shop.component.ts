import { HttpParams } from '@angular/common/http';
import { Prod } from 'src/app/core/interfaces/Prod';
import { Component, OnInit } from '@angular/core';
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
export class ShopComponent implements OnInit {
  newProds?: any;
  pageSize: number = 1;
  filterForm: FormGroup;
  showFilter: boolean = false;
  pageNumber: number = 1;
  sendPage: FormGroup;
  selectedOption: string;
  count?: number;
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
    this.changePage(this.pageNumber);
  }

  clearAllFilters() {
    const params = new HttpParams()
      .set('category', this.filterForm.value['category'])

      .set('pageNumber', this.pageNumber)
      .set('pageSize', this.pageSize)
      .set('Gender', this.filterForm.value['type'])
      .set('MaxPrice', this.filterForm.value['MaxPrice'])
      .set('MinPrice', this.filterForm.value['MinPrice']);

    this.prod.getShop(params).subscribe((data) => {
      this.newProds = data;
      this.count = this.newProds[0].count;

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
    const filters = this.filterForm.value;

    const params = new HttpParams()
      .set('category', this.filterForm.value['category'])
      .set('Gender', this.filterForm.value['type'])
      .set('pageNumber', this.pageNumber)
      .set('pageSize', this.pageSize)
      .set('MaxPrice', this.filterForm.value['MaxPrice'])
      .set('MinPrice', this.filterForm.value['MinPrice']);

    this.prod.getShop(params).subscribe((data) => {
      this.newProds = data;
      console.log(this.newProds);
    });
    console.log(filters);
  }
  openFilter() {
    this.showFilter = !this.showFilter;
  }

  changePage(pageNum: number) {
    this.pageNumber = pageNum;

    console.log(this.pageNumber);

    const params = new HttpParams()
      .set('category', this.filterForm.value['category'])

      .set('pageNumber', this.pageNumber)
      .set('pageSize', this.pageSize)
      .set('Gender', this.filterForm.value['type'])
      .set('MaxPrice', this.filterForm.value['MaxPrice'])
      .set('MinPrice', this.filterForm.value['MinPrice']);
    this.prod.getShop(params).subscribe((data) => {
      this.newProds = data;
      this.count = this.newProds[0].count;

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
