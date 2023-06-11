import { HttpParams } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { event } from 'jquery';
import { Observable, catchError } from 'rxjs';
import { Prod } from 'src/app/core/interfaces/Prod';
import { cart } from 'src/app/core/interfaces/cart';
import { product } from 'src/app/core/interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';
import { ProdService } from 'src/app/core/services/prod.service';
import { StripeScriptTag } from 'stripe-angular';
import { ViewportScroller } from '@angular/common';
import { CustomerService } from 'src/app/core/services/customer.service';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { error } from 'console';
import { NgbService } from 'src/app/core/services/ngb.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})




export class CartComponent implements OnInit {

  cartProducts: any;
  pageNumber:number = 1;
  pageSize:number = 6;
  p: any;
  total: number = 0;
  priceOfProduct: number;
  count:number;

  constructor(private ngbService:NgbService,private cart: CartService,private paginationService:PaginationService,private scroller:ViewportScroller,private changeDetector:ChangeDetectorRef,private customer:CustomerService) {
    
  }

  //
  ngOnInit(): void { 
    this.getCartItems();
  }
  getCartItems(){ 
    this.cart.viewCart().subscribe((cart) => {
      this.cartProducts = cart['carts'];
      console.log(this.cartProducts)
      this.totalPrice();
    });
  }
  changePage(pageNum){
    this.pageNumber = pageNum;
    this.paginationService.emitPageChange();

  }
  //
  totalPrice() {
    this.total = 0;
    this.cartProducts.forEach((product: any) => {
      this.total += product.price;
    });
  }
  //
  deleteItem(id: number) {
    this.cart.deleteCart(id).subscribe(() => {
      this.cartProducts = this.cartProducts.filter((prod) => prod.product.productId !== id);
      if(this.cartProducts.length == 0){
        this.cartProducts = false;
      }
    });
  }
  //
  isValidImage(imageUrl: string): boolean {
    // Check if the imageUrl is empty or does not load a valid image
    // For example, you can use an Image object to check if it's a valid image
    if (imageUrl) {
      const image = new Image();
      image.src = imageUrl;
      return image.complete && image.naturalWidth !== 0;
    }
    return false;
  }
  showDanger(msg: string) {
    this.ngbService.show(msg, {
      classname: 'dangertoast',
    });
  }
  //
  plus(cartProduct: any, prodId: number, e,msg:string) {
    if (cartProduct.quantity >= 10) {
      cartProduct.quantity = 10;
    } else {
      if(cartProduct.product.quantity!=cartProduct.quantity){
        cartProduct.quantity += 1;
        const param = new HttpParams().set('productId', prodId);
        this.cart.incrementQuantity(param).subscribe();
        this.totalPrice();
      }else{
        cartProduct.quantity=cartProduct.product.quantity;
        this.showDanger(msg);
      }
      
     
    }
  }
  //
  minus(cartProduct: any, prodId: number, e) {
    if (cartProduct.quantity <= 1) {
      cartProduct.quantity = 1;
    } else {
      cartProduct.quantity -= 1;
      const param = new HttpParams().set('productId', prodId)
      this.cart.decrementQuantity(param).subscribe();
      this.totalPrice();
    }
  }

  //
  clearCart() {
    this.customer.deleteCustomerCart().subscribe(()=>{
      this.cartProducts=false;
      window.scrollTo({top:0,behavior:'smooth'});
    });
  }







}
