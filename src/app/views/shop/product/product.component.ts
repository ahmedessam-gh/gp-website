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
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { NgbService } from 'src/app/core/services/ngb.service';
declare var $: any;
import 'slick-carousel';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  submitted: boolean = false;
  ratingSub = false;
  myprod: any;
  p: any;

  prods: Prod[] = [];
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
  question: FormGroup;
  selectedPhoto: string;
  isBigPhotoUpdated: boolean;
  myratings: {
    rating: Number;
    name: string;
    review: string;
  }[];
  showNewQuestionForm: boolean = false;
  showRatingForm: boolean = false;
  questions: { question: string; answer: string }[];
  ratings: FormGroup;
  selectedValue: string;
  constructor(
    private cart: CartService,
    private prod: ProdService,
    private ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private ngbService: NgbService
  ) {}

  ngOnInit(): void {
    const ordersrouting = this.ActivatedRoute.snapshot.paramMap;
    const prodid = ordersrouting.get('prodid');
    this.prods = this.prod.product;
    this.myprod = this.prod.product.find((prod) => prod.id === prodid);
    this.selectedPhoto = this.myprod.img;
    this.isBigPhotoUpdated = false;
    this.questions = this.myprod.questions;
    this.myratings = this.myprod.ratings;
    this.submitted = true;

    this.question = this.fb.group({
      newQuestion: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.ratings = this.fb.group({
      newRating: [0, [Validators.required]],
      newName: ['', [Validators.required]],
      newReview: [''],
    });
  }

  addToCart(prod: Prod) {
    this.onSizeChanged(prod);
    this.cart.addToCart({
      items: prod,
      total: 0,
    });
    console.log(prod);
  }

  addQuestion() {
    this.submitted = true;
    if (this.question.valid) {
      this.submitted = false;
      const newQuestionValue = this.question.controls['newQuestion'].value;
      this.questions.push({ question: newQuestionValue, answer: '' });
      this.question.reset();
      this.showNewQuestionForm = false;
      // Clear the form control after adding the new question
    }
  }

  addRating() {
    if (this.ratings.valid) {
      const newRatingValue = this.ratings.controls['newRating'].value;
      const newNameValue = this.ratings.controls['newName'].value;
      const newReviewValue = this.ratings.controls['newReview'].value;

      this.myratings.push({
        rating: newRatingValue,
        name: newNameValue,
        review: newReviewValue,
      });
      this.ratings.reset();
    } // Clear the form control after adding the new question
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

  onSizeChanged(prod: Prod) {
    const newProd = { ...prod };
    newProd.size = prod.size;
    newProd.id = `${prod.id}_${prod.size}`;
  }

  showRatingForms() {
    this.showRatingForm = !this.showRatingForm;
  }

  showNewQuestionForms() {
    this.showNewQuestionForm = !this.showNewQuestionForm;
  }
  showStandard(review, form) {
    if (form.valid) {
      this.ngbService.show(review, {});
    }
  }
}
