import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { FormGroup } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let fb:FormBuilder;
  
  // beforeEach(async () => {
    
 
  // });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule,HttpClientTestingModule,RouterTestingModule,BrowserAnimationsModule],
      declarations: [ CheckoutComponent ]
    })
    .compileComponents();
    // component.orderDetails = {
    //   address: '',
    //   email: '',
    //   fname: '',
    //   lname: '',
    //   phone: '',
    //   detailsList: [
    //     {
    //       quantity: 1,
    //       isRent: true,
    //       price: 100,
    //       productName: ''
    //     },
       
    //   ]
    // };
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // fb = TestBed.inject(FormBuilder); 
    // // Initialize the orderForm object
    // component.orderForm = fb.group({
    //   address: '',
    //   phone: '',
    //   method: '',
    //   name: ''
    // });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should place an order with "Cash" payment method', () => {
  //   spyOn(component.router, 'navigate'); // Spy on the router navigate method
  //   component.orderForm.setValue({
  //     address: '123 Main St',
  //     phone: '1234567890',
  //     method: 'cash',
  //     name: ''
  //   });
  //   fixture.detectChanges();
  //   const placeOrderButton = fixture.nativeElement.querySelector('.placeOrderBtn');
  //   placeOrderButton.click();
  
  //   expect(component.router.navigate).toHaveBeenCalledWith(['/shop']);
  // });
  // it('should place an order with "Credit Card" payment method', fakeAsync(() => {
  //   spyOn(component.router, 'navigate'); // Spy on the router navigate method
  //   component.orderForm.setValue({
  //     address: '123 Main St',
  //     phone: '1234567890',
  //     method: 'credit',
  //     name: 'John Doe'
  //   });
  //   fixture.detectChanges();
  //   const placeOrderButton = fixture.nativeElement.querySelector('.placeOrderBtn');
  //   placeOrderButton.click();
  //   tick(); // Simulate passage of time for async operation
  
  //   expect(component.router.navigate).toHaveBeenCalledWith(['/shop']);
  // }));
});
