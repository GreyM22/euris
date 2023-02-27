import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryProductViewComponent } from './entry-product-view.component';

describe('EntryProductViewComponent', () => {
  let component: EntryProductViewComponent;
  let fixture: ComponentFixture<EntryProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryProductViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
