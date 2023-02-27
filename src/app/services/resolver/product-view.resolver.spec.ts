import { TestBed } from '@angular/core/testing';

import { ProductViewResolver } from './product-view-resolver.service';

describe('ProductViewResolver', () => {
  let resolver: ProductViewResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductViewResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
