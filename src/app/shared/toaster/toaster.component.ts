import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { NgbService } from 'src/app/core/services/ngb.service';
@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
})
export class ToasterComponent implements OnInit {
  @Input() toastMessage: any;
  @Input() contentMessage: string;
  constructor(public ngbService: NgbService) {}

  ngOnInit(): void {}
  // showStandard(dangerTpl) {
  //   this.ngbService.show(dangerTpl, {});
  // }

  showSuccess() {
    this.ngbService.show(this.toastMessage, {});
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
