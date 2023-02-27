import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGridPageComponent } from './products-grid-page.component';

describe('ProductsGridPageComponent', () => {
  let component: ProductsGridPageComponent;
  let fixture: ComponentFixture<ProductsGridPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsGridPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
