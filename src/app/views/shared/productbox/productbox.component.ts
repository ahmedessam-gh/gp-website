import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prod } from 'src/app/core/interfaces/Prod';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-productbox',
  templateUrl: './productbox.component.html',
  styleUrls: ['./productbox.component.css'],
})
export class ProductboxComponent implements OnInit {
  @Input() product: Prod;
  public form: FormGroup;

  constructor(private prod: ProdService, private fb: FormBuilder) {
    this.form = this.fb.group({
      rating: [5],
    });
  }

  ngOnInit(): void {}
}
