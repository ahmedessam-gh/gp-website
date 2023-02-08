import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadFootComponent } from './head-foot.component';

describe('HeadFootComponent', () => {
  let component: HeadFootComponent;
  let fixture: ComponentFixture<HeadFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadFootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
