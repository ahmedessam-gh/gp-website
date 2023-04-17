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
  newProds: Prod[] = [];
  p: number = 1;
  filterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private prod: ProdService,
    private cart: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newProds = this.prod.product;
    Aos.init();

    this.filterForm = this.fb.group({
      size: [],
      color: [],
      price: [],
      category: [],
    });
  }
 
  

  clearAllFilters() {
    $(document).ready(() => {
      $('#uncheck').click(() => {
        $('[type=radio], [type=checkbox').prop('checked', false);
      });
    });
  }

  onSubmit() {
    const filters = this.filterForm.value;
    console.log(filters);
    // do something with the selected filters
  }
}
