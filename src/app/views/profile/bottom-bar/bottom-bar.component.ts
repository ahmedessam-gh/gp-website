import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showRightBar(){
    const leftBtn =document.getElementById('leftBtn');
    const navRespons = document.getElementById('navRespons');
    navRespons.classList.add('d-block');
    navRespons.classList.remove('d-none');
    leftBtn.classList.add('d-none');
    document.body.classList.add('');
  }
  closeRightBar(){
    const leftBtn =document.getElementById('leftBtn');
    const navRespons = document.getElementById('navRespons');
    leftBtn.classList.add('d-block');
    leftBtn.classList.remove('d-none');
    navRespons.classList.add('d-none');
    
  }
}
