import { Component, Input, OnInit } from '@angular/core';
import { Prod } from 'src/app/core/interfaces/Prod';
import { product } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() product;

  constructor() {}

  ngOnInit(): void {}
}
