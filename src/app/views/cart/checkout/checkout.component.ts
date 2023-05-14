import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { CartService } from 'src/app/core/services/cart.service';
import { orderDetails } from 'src/app/core/interfaces/orderDetails';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  activeIndex = 1;
  isChecked: boolean;
  currenMethod: any;
  orderForm: FormGroup;
  orderDetails: orderDetails;
  orderTotal: number;
  constructor(private cart: CartService, private fb: FormBuilder) { }

  async ngOnInit(): Promise<void> {
    this.cart.getOrderDetails().subscribe((data) => {
      this.orderDetails = data;
      console.log(this.orderDetails)
      this.orderForm = this.fb.group({
        address: [this.orderDetails['address'] || '', Validators.required],
        phone: [this.orderDetails['phone'] || '', Validators.required],
        method: [''],
      })
    })
    this.orderTotal = await this.cart.totalPrice();
    console.log(this.orderTotal);

  }
  //
  placeOrder() {
    if (this.orderForm.valid) {
      this.cart.payWithCash(this.orderForm.value).subscribe();
    } else {
      console.log('enter a valid data');
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
