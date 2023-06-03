import { HttpParams } from '@angular/common/http';
import { Prod } from 'src/app/core/interfaces/Prod';
import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProdService } from 'src/app/core/services/prod.service';
import { CartService } from 'src/app/core/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  pageSize: number = 9;
  filterForm: FormGroup;
  showFilter: boolean = false;
  pageNumber: number = 1;
  sendPage: FormGroup;
  selectedOption: string;
  sliderValues: number[] = [300, 400];
  startValue: number = 200;
  endValue: number = 200;

  count?: number;
  searchTerm: string = '';
  filtered: boolean = false;
  localstorageData: string;
  localstorageNumber: string;
  localstoargeGender: string;
  localstoargeCategory: string;
  localstoargeGenderChanges$: Observable<any>;
  categories: any;
  params: HttpParams;
  genderchecked: boolean;
  isGender: any;
  flagGender: boolean = false;
  localstoargeSearch: string;

  constructor(
    private fb: FormBuilder,
    private prod: ProdService,
    private cart: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    Aos.init();

    this.getAllCategories();
    this.localstorageData = localStorage.getItem('data');
    this.localstoargeGender = localStorage.getItem('gender');
    this.localstoargeCategory = localStorage.getItem('category');
    this.localstoargeSearch = localStorage.getItem('search');
    this.filterForm = this.fb.group({
      type: [this.localstoargeGender || ''],
      MinPrice: [''],
      MaxPrice: [''],
      category: [this.localstoargeCategory || ''],
      subcategory: [''],
    });
    this.searchTerm = this.localstoargeSearch || '';

    this.getProducts(this.pageNumber);
  }

  ngOnDestroy() {
    localStorage.removeItem('data');
    localStorage.removeItem('count');
    localStorage.removeItem('gender');
    localStorage.removeItem('category');
    localStorage.removeItem('search');
  }

  clearAllFilters() {
    this.filtered = true;
    this.pageNumber = 1;

    this.filterForm = this.fb.group({
      type: [''],
      MinPrice: [''],
      MaxPrice: [''],
      category: [''],
      subcategory: [''],
    });

    this.searchTerm = '';
    this.getProducts(this.pageNumber);
    $(document).ready(() => {
      $('#uncheck').click(() => {
        $('[type=radio], [type=checkbox').prop('checked', false);
      });
    });
  }
  // getLocalStorageGender(): void {
  //   const updatedGender = localStorage.getItem('gender');
  //   const updatedCategory = localStorage.getItem('category');
  //   console.log(updatedCategory, updatedGender);
  //   console.log(this.localstoargeCategory, this.localstoargeGender);
  //   if (
  //     updatedGender !== this.localstoargeGender &&
  //     this.localstoargeGender !== ''
  //   ) {
  //     this.localstoargeGender = updatedGender;
  //     this.filterForm = this.fb.group({
  //       type: [this.localstoargeGender || ''],
  //       MinPrice: [''],
  //       MaxPrice: [''],
  //       category: [this.localstoargeCategory || ''],
  //       subcategory: [''],
  //     });
  //     this.getProducts(this.pageNumber);
  //     this.flagGender = true;
  //   }

  //   if (
  //     updatedCategory !== this.localstoargeCategory &&
  //     this.localstoargeCategory !== ''
  //   ) {
  //     this.localstoargeCategory = updatedCategory;
  //     this.filterForm = this.fb.group({
  //       type: [this.localstoargeGender || ''],
  //       MinPrice: [''],
  //       MaxPrice: [''],
  //       category: [this.localstoargeCategory || ''],
  //       subcategory: [''],
  //     });
  //     this.getProducts(this.pageNumber);
  //     this.flagGender = true;
  //   }
  // }

  getProducts(pageNum: number) {
    this.pageNumber = pageNum;
    this.params = new HttpParams()
      .set('pageNumber', this.pageNumber)
      .set('pageSize', this.pageSize);

    if (this.filterForm.value['MaxPrice'] !== '') {
      this.params = this.params.set(
        'MaxPrice',
        this.filterForm.value['MaxPrice']
      );
    }

    if (this.filterForm.value['MinPrice'] !== '') {
      this.params = this.params.set(
        'MinPrice',
        this.filterForm.value['MinPrice']
      );
    }

    if (this.filterForm.value['subcategory'] !== '') {
      this.params = this.params.set(
        'SubCategory',
        this.filterForm.value['subcategory']
      );
    }
    if (this.filterForm.value['category'] !== '') {
      this.params = this.params.set(
        'Category',
        this.filterForm.value['category']
      );
    }
    if (this.filterForm.value['type'] !== '') {
      this.params = this.params.set('Gender', this.filterForm.value['type']);
    }

    if (this.searchTerm !== '') {
      this.params = this.params.set('SearchTerm', this.searchTerm);
    }
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.filterForm.value['Gender'] = params.get['type'];
      this.prod.getShop(this.params).subscribe(
        (data) => {
          this.newProds = data.productsWithAvgRates;
          this.count = data.count;
          console.log(this.count);
          this.filterForm = this.fb.group({
            type: [this.filterForm.value['type'] || ''],
            MinPrice: [this.filterForm.value['MinPrice'] || ''],
            MaxPrice: [this.filterForm.value['MaxPrice'] || ''],
            category: [this.filterForm.value['category'] || ''],
            subcategory: [this.filterForm.value['subcategory'] || ''],
          });
        },
        (error) => {
          console.log(error);
        }
      );
    });
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
  changePage(pageNum: number) {
    this.pageNumber = pageNum;

    this.params = this.params
      .set('pageNumber', this.pageNumber)
      .set('pageSize', this.pageSize);
    this.prod.getShop(this.params).subscribe(
      (data) => {
        this.newProds = data.productsWithAvgRates;
        this.count = data.count;
        console.log(this.count);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
