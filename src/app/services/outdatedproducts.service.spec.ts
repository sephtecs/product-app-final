import { TestBed } from '@angular/core/testing';

import { OutdatedproductsService } from './outdatedproducts.service';

describe('OutdatedproductsService', () => {
  let service: OutdatedproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutdatedproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
