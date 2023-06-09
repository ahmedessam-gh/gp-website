import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
  private pageChangeSubject = new Subject<void>();
  
  pageChange$ = this.pageChangeSubject.asObservable();

  emitPageChange() {
    this.pageChangeSubject.next();
  }
}
