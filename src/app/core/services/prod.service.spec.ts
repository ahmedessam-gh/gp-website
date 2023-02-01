import { TestBed } from '@angular/core/testing';

import { ProdService } from './prod.service';

describe('ProdService', () => {
  let service: ProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
