import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations: [
    // trigger('slideInOut', [
    //   state('void', style({
    //     transform: 'translateY(-100%)'
    //   })),
    //   state('*', style({
    //     transform: 'translateY(0%)'
    //   })),
    //   transition(':enter', animate('0.3s ease-in-out')),
    //   transition(':leave', animate('0.3s ease'))
    // ])
  ],
})
export class CheckoutComponent implements OnInit {
  activeIndex = 1;
  isChecked:boolean;
  currenMethod:any;
  constructor() { }

  ngOnInit(): void {
    // this.setActive();
  }
  setActive(){
    const billingContainer = document.getElementById('billingContainer');
    const divs = billingContainer.querySelectorAll('.step');
    // console.log(divs);
    for(var i =0 ; i<divs.length ;i++){
      divs[i].classList.remove('active');
    }
    divs[this.activeIndex].classList.add('active');
  }


  prevDiv(){
    this.activeIndex--;
    if(this.activeIndex<0){
      this.activeIndex = 0;
    }
    this.setActive();
  }
  nextDiv(){
    this.activeIndex++;
    const billingContainer = document.getElementById('billingContainer');
    const divs = billingContainer.querySelectorAll('.step');
    if(this.activeIndex > divs.length - 1){
      this.activeIndex = divs.length -1;
    }
    this.setActive();
  }

  
}
