import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  navPosition:string = "sticky";
  private applyScrollStyling = new BehaviorSubject<boolean>(false);
  applyScrollStyling$ = this.applyScrollStyling.asObservable();
  setApplyScrollStyling(value: boolean) {
    this.applyScrollStyling.next(value);
  }


}
