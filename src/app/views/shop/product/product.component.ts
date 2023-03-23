import { Prod } from 'src/app/core/interfaces/Prod';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdService } from 'src/app/core/services/prod.service';
declare var $: any;
import 'slick-carousel';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  myprod: any;
  myprodColor: any;
  selectedValue: string;
  constructor(
    private prod: ProdService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const ordersrouting = this.ActivatedRoute.snapshot.paramMap;
    const prodid = Number(ordersrouting.get('prodid'));
    this.myprod = this.prod.product.find((prod) => prod.id === prodid);
    this.myprodColor = this.prod.product[this.myprod.id].color;

    (<any>$('.slider-nav')).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: null,
      nextArrow: null,
      dots: true,
    });
  }
}
