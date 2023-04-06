import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  activeIndex = 1;
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
