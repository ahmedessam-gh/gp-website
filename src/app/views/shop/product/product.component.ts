import { CartService } from 'src/app/core/services/cart.service';
import { Prod } from 'src/app/core/interfaces/Prod';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  quantity: any;
  allprod: any;
  cartError: any;
  favError: any;
  favMsg: string;
  cartMsg: string;
  discountedprice: number;
  param: HttpParams;
  constructor(
    private cart: CartService,
    private prod: ProdService,
    private ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private ngbService: NgbService,
    private customer: CustomerService,
    private auth: AuthService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  async ngOnInit() {
    this.showUserList();
    this.prod.getArrival().subscribe((carouselprod) => {
      this.prods = carouselprod.productsWithAvgRates;
    });
    this.ActivatedRoute.params.subscribe((params) => {
      this.prodid = params['prodid'];
      this.getProduct();
    });
    // this.ratings = this.fb.group({
    //   newRating: [0, [Validators.required]],
    //   newName: ['', [Validators.required]],
    //   productId: [this.myprod.id],
    //   newReview: [''],
    // });
  }
  reportProduct(prod: any) {
    this.customer.setReportData(prod);
    this.router.navigate(['/report']);
  }
  addToCart(prod: any, msg) {
    const data = {
      productId: prod.product.productId,
      quantity: prod.quantity,
      isRent: true,
    };

    this.customer.addToCart(data).subscribe(
      (next) => {
        console.log(data);
        this.showToaster(msg);
      },
      (error) => {
        this.cartError = error.error;
        this.showDanger(this.cartError);
      }
    );
  }
  showUserList() {
    if (this.auth.getUser()) {
      this.userList = true;
    } else this.userList = false;
  }
  addQuestion(msg) {
    this.submitted = true;
    if (this.addQuestions.valid) {
      this.prod.sendQuestions(this.addQuestions.value).subscribe((next) => {
        const newQuestionValue = this.addQuestions.get('question').value;
        console.log(newQuestionValue);
        this.questions.push({ question: newQuestionValue });
        this.submitted = false;
        this.addQuestions.get('question').setValue('');
        this.showToaster(msg);
      }); // Clear the form control after adding the new question
    }
  }

  addRating(msg: string) {
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
          this.showToaster(msg);
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
  //
  plus() {
    if (this.allprod.quantity >= 10) {
      this.allprod.quantity = 10;
    } else {
      this.allprod.quantity += 1;
    }
  }
  //
  minus() {
    if (this.allprod.quantity <= 1) {
      this.allprod.quantity;
    } else {
      this.allprod.quantity -= 1;
    }
  }

  addToFav(productId: any, msg) {
    this.customer.addToWishList(productId).subscribe(
      (next) => {
        console.log(productId);
        this.showToaster(msg);
      },
      (error) => {
        console.log(error);
        this.favError = error.error;

        this.showDanger('Item is already in your wishlist');
      }
    );
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

  showToaster(msg: string) {
    this.ngbService.show(msg);
  }

  showDanger(msg: string) {
    this.ngbService.show(msg, {
      classname: 'dangertoast',
    });
  }
  getProduct() {
    this.param = new HttpParams().set('id', this.prodid);
    this.prod.getProds(this.param).subscribe((data) => {
      this.allprod = data;
      console.log(this.allprod);
      this.myprod = (data as any).product;
      this.quantity = (data as any).quantity;
      console.log(this.quantity);
      this.questions = this.myprod.questions;
      const sale_percentage = this.myprod.sale / 100;
      this.discountedprice =
        this.myprod.price - sale_percentage * this.myprod.price;

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
  }
}
