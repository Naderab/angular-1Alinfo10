import { TestBed } from '@angular/core/testing';

import { ProductsConsumerService } from './products-consumer.service';

describe('ProductsConsumerService', () => {
  let service: ProductsConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
