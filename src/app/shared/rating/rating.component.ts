import { Component, Input, OnInit } from '@angular/core';
import { Prod } from 'src/app/core/interfaces/Prod';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() product: Prod;

  constructor() {}

  ngOnInit(): void {}
}
