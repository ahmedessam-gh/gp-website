import { Directive, ElementRef, HostListener } from '@angular/core';
import { PaginationService } from '../services/pagination.service';

@Directive({
  selector: '[appScrollTop]'
})
export class ScrollTopDirective {
  constructor() { }

  // constructor(private paginationService:PaginationService,private elementRef:ElementRef) { }
  ngOnInit(){
    // this.paginationService.pageChange$.subscribe(() => {
    //   this.elementRef.nativeElement.scrollTo({top:0, behavior: 'smooth' });
    // });
  }
}
