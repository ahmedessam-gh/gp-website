import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadFootDisplayComponent } from './head-foot-display.component';

describe('HeadFootDisplayComponent', () => {
  let component: HeadFootDisplayComponent;
  let fixture: ComponentFixture<HeadFootDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadFootDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadFootDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
