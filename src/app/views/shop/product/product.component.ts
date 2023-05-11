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

import { NgbService } from 'src/app/core/services/ngb.service';
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
  prodid: any;
  prods: Prod[] = [];

  addQuestions: FormGroup;
  selectedPhoto: string;
  isBigPhotoUpdated: boolean;
  myratings: {
    rating: Number;
    name: string;
    review: string;
  }[];
  showNewQuestionForm: boolean = false;
  showRatingForm: boolean = false;
  ratings: FormGroup;
  selectedValue: string;
  questions: any;
  constructor(
    private cart: CartService,
    private prod: ProdService,
    private ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private ngbService: NgbService
  ) {}

  async ngOnInit() {
    this.prodid = this.ActivatedRoute.snapshot.paramMap.get('prodid');

    this.prod.getProds(this.prodid).subscribe((data) => {
      this.myprod = data;
      this.questions = this.myprod.questions;
      console.log(this.questions);

      console.log(this.myprod);
      this.addQuestions = this.fb.group({
        productId: [this.myprod.productId],
        question: ['', [Validators.required, Validators.minLength(9)]],
      });
    });
    this.prods = this.prod.product;

    this.selectedPhoto = this.myprod.productImages[0].imageUrl;
    this.isBigPhotoUpdated = false;
    this.myratings = this.myprod.ratings;
    this.submitted = true;

    // this.ratings = this.fb.group({
    //   newRating: [0, [Validators.required]],
    //   newName: ['', [Validators.required]],
    //   productId: [this.myprod.id],
    //   newReview: [''],
    // });
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
    console.log(this.addQuestions);
    if (this.addQuestions.valid) {
      this.prod.sendQuestions(this.addQuestions.value).subscribe((next) => {
        const newQuestionValue = this.addQuestions.get('question').value;
        console.log(newQuestionValue);
        this.questions.push({ question: newQuestionValue, answer: '' });
        this.addQuestions.reset();
        this.showNewQuestionForm = false;
      }); // Clear the form control after adding the new question
    }
  }

  addRating() {
    this.ratingSub = true;

    if (this.ratings.valid) {
      this.ratingSub = false;

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
