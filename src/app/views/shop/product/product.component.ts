import { CartService } from 'src/app/core/services/cart.service';
import { Prod } from 'src/app/core/interfaces/Prod';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdService } from 'src/app/core/services/prod.service';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

declare var $: any;
import 'slick-carousel';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  myprod: any;
  prods: Prod[] = [];
  myprodColor: any;

  questions = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    { question: 'Question 3', answer: 'Answer 3' },
  ];
  newQuestion = '';

  selectedValue: string;
  constructor(
    private cart: CartService,
    private prod: ProdService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const ordersrouting = this.ActivatedRoute.snapshot.paramMap;
    const prodid = Number(ordersrouting.get('prodid'));
    this.prods = this.prod.product;
    this.myprod = this.prod.product.find((prod) => prod.id === prodid);
    this.myprodColor = this.prod.product[this.myprod.id].color;

    $('.owl-carousel').owlCarousel({
      nav: true,
      margin: 30,
      dots: false,

      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  }

  addToCart(productItem: Prod) {
    this.cart.addToCart(productItem);
  }

  addQuestion() {
    this.questions.push({ question: this.newQuestion, answer: '' });
    this.newQuestion = '';
  }
  changePhoto(photo: any) {
    const smallPhotos = document.querySelectorAll(
      '.productSmallimgs img'
    ) as NodeListOf<HTMLImageElement>;
    const bigPhoto = document.querySelector(
      '.productBigImg img'
    ) as HTMLImageElement;
    bigPhoto.src = photo;
  }
}
