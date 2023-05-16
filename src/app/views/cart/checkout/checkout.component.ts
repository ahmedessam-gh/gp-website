import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';
import { CartService } from 'src/app/core/services/cart.service';
import { orderDetails } from 'src/app/core/interfaces/orderDetails';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { async } from 'rxjs';
import {
  Stripe,
  StripeCardCvcElement,
  StripeCardExpiryElement,
  StripeCardNumberElement,
  loadStripe,
} from '@stripe/stripe-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: 0 }),
        animate('200ms', style({ height: '*', overflow: 'hidden' })),
      ]),
      transition(':leave', [
        style({ height: '*' }),
        animate('50ms', style({ height: 0 })),
      ]),
    ]),
  ],
})
export class CheckoutComponent implements OnInit {
  @ViewChild('cardNumber') cardNumber?: ElementRef;
  @ViewChild('cardExpiry') cardExpiry?: ElementRef;
  @ViewChild('cardCvc') cardCvc?: ElementRef;
  stripe: Stripe | null = null;
  cardNum?: StripeCardNumberElement;
  cardExp?: StripeCardExpiryElement;
  cardCvC?: StripeCardCvcElement;
  emailAddress: string;
  activeIndex = 1;
  isChecked: boolean;
  currenMethod: any;
  orderForm: FormGroup;
  orderDetails: orderDetails;
  orderTotal: number;
  cardErrors: any;
  clientSecret: any;
  modifiedClientSecret: any;
  constructor(
    private cart: CartService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.cart.getOrderDetails().subscribe((data) => {
      this.orderDetails = data;
      console.log(this.orderDetails);
      this.orderForm = this.fb.group({
        address: [this.orderDetails['address'] || '', Validators.required],
        phone: [this.orderDetails['phone'] || '', Validators.required],
        method: [''],
        name: [''],
      });
    });
    this.orderTotal = await this.cart.totalPrice();
    console.log(this.orderTotal);
    loadStripe(
      'pk_test_51N4OuSDz65k2SKUd7lEOmteETYa5cBdBWL3QVtibiLctz1t7LVoRTMBI7dR5PYtEsNZYnsZbTtR0Ec3p1imWqzqQ00J0j9kTO9'
    ).then((stripe) => {
      this.stripe = stripe;
      const elements = stripe?.elements();
      if (elements) {
        this.cardNum = elements.create('cardNumber');
        this.cardNum.mount(this.cardNumber?.nativeElement);
        this.cardNum.on('change', (event) => {
          if (event.error) {
            this.cardErrors = event.error.message;
          } else {
            this.cardErrors = null;
          }
        });

        this.cardExp = elements.create('cardExpiry');
        this.cardExp.mount(this.cardExpiry?.nativeElement);
        this.cardExp.on('change', (event) => {
          if (event.error) {
            this.cardErrors = event.error.message;
          } else {
            this.cardErrors = null;
          }
        });

        this.cardCvC = elements.create('cardCvc');
        this.cardCvC.mount(this.cardCvc?.nativeElement);
        this.cardCvC.on('change', (event) => {
          if (event.error) {
            this.cardErrors = event.error.message;
          } else {
            this.cardErrors = null;
          }
        });
      }
    });
  }
  //
  payWithCredit() {}
  //
  placeOrder() {
    this.cart.payWithCredit(this.orderForm.value).subscribe((clientSecret) => {
      this.clientSecret = clientSecret;
      console.log(this.clientSecret);
      console.log('orderCreated');
      this.stripe
        ?.confirmCardPayment(this.clientSecret, {
          payment_method: {
            card: this.cardNum!,
            billing_details: {
              name: this.orderForm.get('name').value,
            },
          },
        })
        .then((res) => {
          console.log(res);
          // if(res.paymentIntent){
          //   this.router.navigate(['/shop']);
          // }
        });
    });
    // if (this.orderForm.valid) {
    //   this.cart.payWithCash(this.orderForm.value).subscribe();
    // } else {
    //   console.log('enter a valid data');
    // }
  }
  //
  setActive() {
    const billingContainer = document.getElementById('billingContainer');
    const divs = billingContainer.querySelectorAll('.step');
    // console.log(divs);
    for (var i = 0; i < divs.length; i++) {
      divs[i].classList.remove('active');
    }
    divs[this.activeIndex].classList.add('active');
  }

  prevDiv() {
    this.activeIndex--;
    if (this.activeIndex < 0) {
      this.activeIndex = 0;
    }
    this.setActive();
  }
  nextDiv() {
    this.activeIndex++;
    const billingContainer = document.getElementById('billingContainer');
    const divs = billingContainer.querySelectorAll('.step');
    if (this.activeIndex > divs.length - 1) {
      this.activeIndex = divs.length - 1;
    }
    this.setActive();
  }
}
