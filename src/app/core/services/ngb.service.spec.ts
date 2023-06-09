import { TestBed } from '@angular/core/testing';

import { NgbService } from './ngb.service';

describe('NgbService', () => {
  let service: NgbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
