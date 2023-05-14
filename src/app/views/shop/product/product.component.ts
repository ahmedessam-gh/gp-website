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
import { CustomerService } from 'src/app/core/services/customer.service';
import { rating } from 'src/app/core/interfaces/rating';
import { throws } from 'assert';
import { AuthService } from 'src/app/core/services/auth.service';
import { product } from 'src/app/core/interfaces/product';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  submitted: boolean;
  ratingSub = false;
  myprod: any;
  p: any;
  q: any;
  prodid: any;
  prods;
  rates: rating;
  addQuestions: FormGroup;
  selectedPhoto: string;
  isBigPhotoUpdated: boolean;
  myratings: any;
  showNewQuestionForm: boolean = false;
  showRatingForm: boolean = false;
  ratings: FormGroup;
  selectedValue: string;
  questions: any;
  userList: boolean = false;
  errors: string = '';
  prodWithQuantity: any;
  constructor(
    private cart: CartService,
    private prod: ProdService,
    private ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private ngbService: NgbService,
    private customer: CustomerService,
    private auth: AuthService
  ) { }

  async ngOnInit() {
  
    this.showUserList();
    this.prodid = this.ActivatedRoute.snapshot.paramMap.get('prodid');
    // this.prod.getShop().subscribe((carouselprod) => {
    //   this.prods = carouselprod;
    // });
    const param = new HttpParams().set('id',this.prodid);
    this.prod.getProds(param).subscribe((data) => {
      this.myprod = data;
      console.log(this.myprod);
      this.questions = this.myprod.questions;
      this.addQuestions = this.fb.group({
        productId: [this.myprod.productId],
        question: ['', [Validators.required, Validators.minLength(9)]],
      });

      this.selectedPhoto = this.myprod.productImages[0].imageUrl;
      this.isBigPhotoUpdated = false;
      this.submitted = false;

      this.prod.getRatings(this.prodid).subscribe((data) => {
        this.rates = data as rating;

        console.log(this.rates);
        this.myratings = this.rates.customerRates;

        this.ratings = this.fb.group({
          rate: [1, [Validators.required]],
          productId: [this.myprod.productId],
          rateComment: [''],
        });
      });
    });

    // this.ratings = this.fb.group({
    //   newRating: [0, [Validators.required]],
    //   newName: ['', [Validators.required]],
    //   productId: [this.myprod.id],
    //   newReview: [''],
    // });
  }

  addToCart(prod: any) {
    this.customer.addToCart(prod).subscribe();
    console.log(prod);
  }
  showUserList() {
    if (this.auth.getUser()) {
      this.userList = true;
    } else this.userList = false;
  }
  addQuestion() {
    this.submitted = true;
    if (this.addQuestions.valid) {
      this.prod.sendQuestions(this.addQuestions.value).subscribe((next) => {
        const newQuestionValue = this.addQuestions.get('question').value;
        console.log(newQuestionValue);
        this.questions.push({ question: newQuestionValue });
        this.submitted = false;
        this.addQuestions.get('question').setValue('');
      }); // Clear the form control after adding the new question
    }
  }

  addRating() {
    if (this.ratings.valid) {
      this.prod.sendRatings(this.ratings.value).subscribe(
        (next) => {
          const newRatingValue = this.ratings.controls['rate'].value;
          const newReviewValue = this.ratings.controls['rateComment'].value;

          this.myratings.push({
            rate: newRatingValue,
            rateComment: newReviewValue,
          });
          this.ratings.reset();
        },
        (error) => {
          this.errors = error.error;
        }
      ); // Clear the form control after adding the new question
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
