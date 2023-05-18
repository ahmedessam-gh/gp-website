import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css'],
})
export class MainCategoriesComponent implements OnInit {
  shopFilter: any;
  genderParam: string;
  newFilter: any;
  count: any;
  constructor(private prod: ProdService) {}

  ngOnInit(): void {}
  setFilter(genderFilter) {
    this.shopFilter = genderFilter;
    let params = new HttpParams().set('Gender', this.shopFilter);

    this.genderParam = params.get('Gender');
    localStorage.setItem('gender', this.genderParam);
    this.prod.getShop(params).subscribe((data) => {
      this.newFilter = data.productsWithAvgRates;
      this.count = data.count;
      console.log(this.count);
      console.log(this.newFilter);

      const serializedData = JSON.stringify(this.newFilter);
      localStorage.setItem('data', serializedData);

      const countData = JSON.stringify(this.count);
      localStorage.setItem('count', countData);
    });
  }
}
