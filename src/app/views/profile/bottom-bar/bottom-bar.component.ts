import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const leftBtn =document.getElementById('leftBtn');
    const navRespons = document.getElementById('navRespons');
    document.addEventListener('click',function(event){
      if((event.target as HTMLElement).id !== 'navRespons' && (event.target as HTMLElement).id !== 'leftBtn'){
        navRespons.classList.remove('d-block');
        navRespons.classList.add('d-none');
        document.body.children[0].classList.remove('layout');
        leftBtn.classList.remove('d-none');
      }
    });
  }

  
  showRightBar(){
    const leftBtn =document.getElementById('leftBtn');
    const navRespons = document.getElementById('navRespons');
    navRespons.classList.toggle('d-none');
    leftBtn.classList.toggle('d-none');
    document.body.children[0].classList.add('layout');
  }
  closeRightBar(){
    const leftBtn =document.getElementById('leftBtn');
    const navRespons = document.getElementById('navRespons');
    leftBtn.classList.toggle('d-none');
    navRespons.classList.toggle('d-none');
    document.body.children[0].classList.remove('layout');
  }
  
}
