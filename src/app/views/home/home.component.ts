import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newProds: any;
  constructor(private prod: ProdService) {}

  ngOnInit(): void {
    this.newProds = this.prod.product;
    Aos.init({});
  }
}
