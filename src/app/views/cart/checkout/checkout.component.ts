import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: 0}),
        animate('200ms', style({ height: '*', overflow:'hidden' })),
      ]),
      transition(':leave', [
        style({ height: '*'}),
        animate('50ms', style({ height: 0})),
      ]),
    ])
 ]
})
export class CheckoutComponent implements OnInit {
  activeIndex = 1;
  isChecked:boolean;
  currenMethod:any;
  constructor() { }

  ngOnInit(): void {
    
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
