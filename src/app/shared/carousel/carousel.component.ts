import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProdService } from 'src/app/core/services/prod.service';
import { Prod } from 'src/app/core/interfaces/Prod';
import { product } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      550: {
        items: 2,
      },
      740: {
        items: 2.5,
      },
      940: {
        items: 3.5,
      },
    },
    nav: true,
  };
  @Input() prods;
  constructor() {}

  ngOnInit(): void {}
}
