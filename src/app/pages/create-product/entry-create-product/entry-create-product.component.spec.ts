import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCreateProductComponent } from './entry-create-product.component';

describe('EntryCreateProductComponent', () => {
  let component: EntryCreateProductComponent;
  let fixture: ComponentFixture<EntryCreateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryCreateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryCreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
