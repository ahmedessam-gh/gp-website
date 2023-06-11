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
import { NgbService } from 'src/app/core/services/ngb.service';

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
  noQuantityError:string;
  creditChecked: string = 'cash';
  submitted = false;
  checkoutToastr: any;
  constructor(private ngbService:NgbService,private cart: CartService, public fb: FormBuilder, public router: Router, public ngb: NgbService) { }

  async ngOnInit(): Promise<void> {
    this.cart.getOrderDetails().subscribe((data) => {
      this.orderDetails = data;
      console.log(this.orderDetails);
      this.orderForm = this.fb.group({
        address: [this.orderDetails['address'] || '', Validators.required],
        phone: [this.orderDetails['phone'] || '', Validators.required],
        method: ['cash', Validators.required],
        name: ['', Validators.required],
      });
    },error=>{
      this.noQuantityError = error.error;
      this.router.navigate(['/cart']).then(()=>{
        this.showDanger(this.noQuantityError);

      });
      console.log(this.noQuantityError);
    });
    this.orderTotal = await this.cart.totalPrice();
    console.log(this.orderTotal);
    // const cash = document.getElementById('cash');
    this.orderForm.get('name').disable();
    this.orderForm.get('method').reset();

    // cash.click();
    // this.cash.nativeElement.click();
    loadStripe(
      'pk_test_51N4OuSDz65k2SKUd7lEOmteETYa5cBdBWL3QVtibiLctz1t7LVoRTMBI7dR5PYtEsNZYnsZbTtR0Ec3p1imWqzqQ00J0j9kTO9'
    ).then((stripe) => {
      this.stripe = stripe;
      const elements = stripe?.elements();
      if (elements) {
        this.cardNum = elements.create('cardNumber');
        this.cardNum.mount(this.cardNumber?.nativeElement);
        this.cardNum.update({ disabled: true })
        this.cardNum.on('change', (event) => {
          if (event.error) {
            this.cardErrors = event.error.message;
          } else {
            this.cardErrors = null;
          }
        });

        this.cardExp = elements.create('cardExpiry');
        this.cardExp.mount(this.cardExpiry?.nativeElement);
        this.cardExp.update({ disabled: true });

        this.cardExp.on('change', (event) => {
          if (event.error) {
            this.cardErrors = event.error.message;
          } else {
            this.cardErrors = null;
          }
        });

        this.cardCvC = elements.create('cardCvc');
        this.cardCvC.mount(this.cardCvc?.nativeElement);
        this.cardCvC.update({ disabled: true });

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
  showDanger(msg: string) {
    this.ngbService.show(msg, {
      classname: 'dangertoast',
    });
  }
  //stripe placing order with cash or credit
  removeDisabled() {
    const credit = document.getElementById('credit') as HTMLInputElement;
    this.creditChecked = credit.value;
    this.orderForm.get('method').setValue('credit');

    if (this.creditChecked === 'credit') {
      this.orderForm.get('name').enable();
      this.cardNum.update({ disabled: false });
      this.cardExp.update({ disabled: false });
      this.cardCvC.update({ disabled: false });
    }
  }
  cashMethod() {
    const cash = document.getElementById('cash') as HTMLInputElement;
    this.creditChecked = cash?.value;
    this.orderForm.get('method').setValue('cash');
    if (this.creditChecked === 'cash') {
      this.orderForm.get('name').disable();
      this.cardNum.update({ disabled: true })
      this.cardExp.update({ disabled: true });
      this.cardCvC.update({ disabled: true });
    }
  }
  placeOrder(toaster) {
    this.checkoutToastr = toaster;
    this.submitted = true;
    if (this.orderForm.valid && !this.cardErrors) {
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
          this.router.navigate(['/shop']);

        });

      }
      this.ngb.show(this.checkoutToastr);


    }


  }

  //give active class to the current div
  setActive() {
    const billingContainer = document.getElementById('billingContainer');
    const divs = billingContainer.querySelectorAll('.step');
    // console.log(divs);
    for (var i = 0; i < divs.length; i++) {
      divs[i].classList.remove('active');
    }
    divs[this.activeIndex].classList.add('active');
  }
  //prev button
  prevDiv() {
    this.activeIndex--;
    if (this.activeIndex < 0) {
      this.activeIndex = 0;
    }
    this.setActive();
  }
  //next button
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
