import { CartService } from 'src/app/core/services/cart.service';
import { Prod } from 'src/app/core/interfaces/Prod';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdService } from 'src/app/core/services/prod.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
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
  submitted = false;
  myprod: any;
  prods: Prod[] = [];

  question: FormGroup;
  selectedPhoto: string;
  isBigPhotoUpdated: boolean;

  showNewQuestionForm: boolean;

  questions = [
    {
      question: 'What are the available sizes of the product?',
      answer:
        'This product has 4 sizes (xl , m , s ,l) andsij doiasj iodjasio jdoisaj dioj asiodj osaijd ioasjdioasj',
    },
    {
      question: 'What are the colors here bro',
      answer: 'Mordekaiser and Darius also morgana',
    },
    {
      question: 'Who is the best Terminator member',
      answer: 'i think TRM Gluibert is the best one there',
    },
  ];

  selectedValue: string;
  constructor(
    private cart: CartService,
    private prod: ProdService,
    private ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const ordersrouting = this.ActivatedRoute.snapshot.paramMap;
    const prodid = Number(ordersrouting.get('prodid'));
    this.prods = this.prod.product;
    this.myprod = this.prod.product.find((prod) => prod.id === prodid);
    this.selectedPhoto = this.myprod.img;
    this.isBigPhotoUpdated = false;

    $('.owl-carousel').owlCarousel({
      nav: true,
      margin: 10,
      dots: false,
      loop: false,
      rewind: true,
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

    this.question = this.fb.group({
      newQuestion: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  addToCart(prod: Prod) {
    this.cart.addToCart({
      items: prod,
      total: 0,
    });
  }
  getErrorMessage() {
    if (this.question.controls['newQuestion'].hasError('required')) {
      return 'You must enter a value';
    }
    return ' ';
  }
  addQuestion() {
    this.submitted = true;
    if (this.question.valid) {
      const newQuestionValue = this.question.controls['newQuestion'].value;
      this.questions.push({ question: newQuestionValue, answer: '' });
      this.question.reset(); // Clear the form control after adding the new question
      this.submitted = false;
    }
  }
  changePhoto(photo: any) {
    const smallPhotos = document.querySelectorAll(
      '.productSmallimgs img'
    ) as NodeListOf<HTMLImageElement>;
    const bigPhoto = document.querySelector(
      '.productBigImg img'
    ) as HTMLImageElement;
    bigPhoto.src = photo + '?t=' + new Date().getTime();
    this.selectedPhoto = photo;

    this.isBigPhotoUpdated = true;
    this.isBigPhotoUpdated = false;
  }

  minus(obj) {
    if (obj.quantity <= 1) {
      obj.quantity;
    } else {
      obj.quantity--;
    }
  }
  plus(obj) {
    if (obj.quantity >= 10) {
      obj.quantity;
    } else {
      obj.quantity++;
    }
  }

  addToFav(product: Prod, event) {
    this.prod.addToFav(product, event);
    // this.getFavourites();
  }

  onSizeChanged() {
    const newProduct = { ...this.myprod }; // Create a new object with the same properties as myprod
    newProduct.size = this.myprod.size; // Update the size property with the new size
    this.addToCart(newProduct); // Add the new product to the cart
  }
}
