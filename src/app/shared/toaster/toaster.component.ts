import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { NgbService } from 'src/app/core/services/ngb.service';
@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
})
export class ToasterComponent implements OnInit {
  // @Input() toastMessage: any;
  // @Input() contentMessage: string;
  constructor(public ngbService: NgbService) {}

  ngOnInit(): void {
    this.ngbService.show('this.toastMessage');
  }
  showStandard() {
    this.ngbService.show('this.toastMessage');
  }

  showSuccess() {
    this.ngbService.show('this.toastMessage',{
      classname:'bg-success text-light',
      delay: 10000,
    });
  }

  showDanger(dangerTpl) {
    this.ngbService.show(dangerTpl, {
      classname: 'bg-danger text-light',
      delay: 15000,
    });
  }


  isTemplate(toast) {
    return toast.textOrTpl instanceof TemplateRef;
  }
  
  ngOnDestroy(): void {
    this.ngbService.clear();
  }
}
