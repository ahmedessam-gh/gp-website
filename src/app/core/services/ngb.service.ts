import { Injectable } from '@angular/core';
import { TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgbService {
  toasts: any[] = [];

  constructor() {}

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
