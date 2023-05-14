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
  newProds;
  pageSize: number = 1;
  filterForm: FormGroup;
  showFilter: boolean = false;
  pageNumber: number = 1;
  sendPage: FormGroup;
  selectedOption: string;
  constructor(
    private fb: FormBuilder,
    private prod: ProdService,
    private cart: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sendPage = this.fb.group({
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
    });
    this.prod.getShop().subscribe((data) => {
      this.newProds = data;
      console.log(this.newProds);
    });
    Aos.init();

    this.filterForm = this.fb.group({
      type: [],
      MinPrice: [],
      price: [],
      category: [],
    });
  }

  getCategory(optionValue) {
    // If the clicked option is already selected, uncheck it
    if (this.selectedOption == optionValue) this.selectedOption = '';
    else {
      // Otherwise, select the clicked option
      this.selectedOption = optionValue;

      console.log(this.selectedOption);
    }
  }
  getPrice(event) {
    if (!Array.isArray(this.filterForm.value['price'])) {
      this.filterForm.value['price'] = []; // Initialize as an empty array
    }
    let removeindex = this.filterForm.value['price'].indexOf(
      event.target.value
    );
    if (event.target.checked)
      this.filterForm.value['price'].push(event.target.value);
    else if (removeindex !== -1)
      this.filterForm.value['price'].splice(removeindex, 1);
  }

  clearAllFilters() {
    this.filterForm.reset();

    $(document).ready(() => {
      $('#uncheck').click(() => {
        $('[type=radio], [type=checkbox').prop('checked', false);
      });
    });
  }

  onSubmit() {
    const filters = this.filterForm.value;
    // if (filters.size && filters.size.length === 0) {
    //   delete filters.size; // Remove size if it's empty
    // }
    // if (filters.category && filters.category.length === 0) {
    //   delete filters.category; // Remove category if it's empty
    // }
    // if (filters.color && filters.color.length === 0) {
    //   delete filters.color; // Remove color if it's empty
    // }
    // if (filters.price && filters.price.length === 0) {
    //   delete filters.price; // Remove price if it's empty
    // }

    console.log(filters);
    // do something with the selected filters
  }
  openFilter() {
    this.showFilter = !this.showFilter;
  }

  changePage(pageNum: number) {
    this.pageNumber = pageNum;
    console.log(this.pageNumber);
  }
}
