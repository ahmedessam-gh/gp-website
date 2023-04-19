import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceOrderComponent } from './trace-order.component';

describe('TraceOrderComponent', () => {
  let component: TraceOrderComponent;
  let fixture: ComponentFixture<TraceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
