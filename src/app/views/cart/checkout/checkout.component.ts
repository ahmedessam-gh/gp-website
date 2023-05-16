import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { CartService } from 'src/app/core/services/cart.service';
import { orderDetails } from 'src/app/core/interfaces/orderDetails';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { async } from 'rxjs';
import { Stripe, StripeCardCvcElement, StripeCardExpiryElement, StripeCardNumberElement, loadStripe } from '@stripe/stripe-js';
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
    ])
  ]
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
  creditChecked: string;
  constructor(private cart: CartService, private fb: FormBuilder, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.cart.getOrderDetails().subscribe((data) => {
      this.orderDetails = data;
      console.log(this.orderDetails)
      this.orderForm = this.fb.group({
        address: [this.orderDetails['address'] || '', Validators.required],
        phone: [this.orderDetails['phone'] || '', Validators.required],
        method: ['', Validators.required],
        name: ['', Validators.required]
      })
    })
    this.orderTotal = await this.cart.totalPrice();
    console.log(this.orderTotal);
    this.orderForm.get('name').disable();

    //stripe pk defining and creating input elements from stripe
    loadStripe('pk_test_51N4OuSDz65k2SKUd7lEOmteETYa5cBdBWL3QVtibiLctz1t7LVoRTMBI7dR5PYtEsNZYnsZbTtR0Ec3p1imWqzqQ00J0j9kTO9').then(stripe => {
      this.stripe = stripe;
      const elements = stripe?.elements();
      if (elements) {
        this.cardNum = elements.create('cardNumber');
        this.cardNum.mount(this.cardNumber?.nativeElement);
        this.cardNum.update({ disabled: true });
        this.cardNum.on('change', event => {
          if (event.error) {
            this.cardErrors = event.error.message;
          } else {
            this.cardErrors = null;
          }
        })

        this.cardExp = elements.create('cardExpiry');
        this.cardExp.mount(this.cardExpiry?.nativeElement);
        this.cardExp.update({ disabled: true });

        this.cardExp.on('change', event => {
          if (event.error) {
            this.cardErrors = event.error.message;
          } else {
            this.cardErrors = null;
          }
        })


        this.cardCvC = elements.create('cardCvc');
        this.cardCvC.mount(this.cardCvc?.nativeElement);
        this.cardCvC.update({ disabled: true });

        this.cardCvC.on('change', event => {
          if (event.error) {
            this.cardErrors = event.error.message;
          } else {
            this.cardErrors = null;
          }
        })
      }
    });
  }
  //stripe placing order with cash or credit
  removeDisabled() {
    const credit = document.getElementById('method') as HTMLInputElement;
    this.creditChecked = credit.value;
    if (this.creditChecked === 'credit') {
      this.orderForm.get('name').enable();
      this.cardNum.update({ disabled: false });
      this.cardExp.update({ disabled: false });
      this.cardCvC.update({ disabled: false });
    }
  }
  cashMethod() {
    const cash = document.getElementById('cash') as HTMLInputElement;
    this.creditChecked = cash.value;

    if (this.creditChecked === 'cash') {
      this.orderForm.get('name').disable();
      this.cardNum.update({ disabled: true });
      this.cardExp.update({ disabled: true });
      this.cardCvC.update({ disabled: true });
    }
  }
  placeOrder() {
    if (this.orderForm.valid) {
      if (this.orderForm.get('method').value == 'credit') {
        this.cart.payWithCredit(this.orderForm.value).subscribe((clientSecret) => {
          this.clientSecret = clientSecret;
          console.log(this.clientSecret);
          console.log('orderCreated');
          this.stripe?.confirmCardPayment(this.clientSecret, {
            payment_method: {
              card: this.cardNum!,
              billing_details: {
                name: this.orderForm.get('name').value,
              }
            }
          }).then(res => {
            console.log(res);
            console.log('credit payment success');
            if (res.paymentIntent) {
              this.router.navigate(['/shop']);
            }
          })
        });
      } else if (this.orderForm.get('method').value == 'cash') {
        this.cart.payWithCash(this.orderForm.value).subscribe((res) => {
          console.log('cash payment success');
        });
      }
    }


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
