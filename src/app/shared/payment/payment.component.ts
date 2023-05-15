import { Component, OnInit ,Input,ViewChild, ElementRef} from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
declare var Stripe : stripe.StripeStatic;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  // paymentHandler: any = null;
  // stripeAPIKey: any = 'pk_test_51N4OuSDz65k2SKUd7lEOmteETYa5cBdBWL3QVtibiLctz1t7LVoRTMBI7dR5PYtEsNZYnsZbTtR0Ec3p1imWqzqQ00J0j9kTO9';
  
  constructor(private cart:CartService) {}
  

  ngOnInit() {
    // this.invokeStripe();
  }
  // sendToken(stripeId){
  //     this.cart.sendStripToken(stripeId).subscribe((data)=>{
  //       console.log(data);
  //     })
  // }
  // makePayment(amount: any) {
  //   const paymentHandler = (<any>window).StripeCheckout.configure({
  //     key: this.stripeAPIKey,
  //     locale: 'auto',
  //     token: function (stripeToken: any) {
  //       console.log(stripeToken.id);
  //       this.sendStripe(stripeToken.id);
  //     },
  //   });
    
  //   paymentHandler.open({
  //     name: 'Dressify Checkout',
  //     description: 'buy',
  //     amount: amount * 100,
  //   });
  // }
  
  // // sendStripe(stripeToken){
  // //   this.cart.sendStripToken(stripeToken).subscribe();
  // // }
  // invokeStripe() {
  //   if (!window.document.getElementById('stripe-script')) {
  //     const script = window.document.createElement('script');
  
  //     script.id = 'stripe-script';
  //     script.type = 'text/javascript';
  //     script.src = 'https://checkout.stripe.com/checkout.js';
  //     script.onload = () => {
  //       this.paymentHandler = (<any>window).StripeCheckout.configure({
  //         key: this.stripeAPIKey,
  //         locale: 'auto',
  //         token: function (stripeToken: any) {
  //           console.log(stripeToken);
            
  //         },
  //       });
       
  //     };
      
  //     window.document.body.appendChild(script);
  //   }
  // }
}
