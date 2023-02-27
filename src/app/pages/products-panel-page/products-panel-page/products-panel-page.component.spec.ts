import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPanelPageComponent } from './products-panel-page.component';

describe('ProductsPanelPageComponent', () => {
  let component: ProductsPanelPageComponent;
  let fixture: ComponentFixture<ProductsPanelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPanelPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
