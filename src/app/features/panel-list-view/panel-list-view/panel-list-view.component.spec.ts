import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelListViewComponent } from './panel-list-view.component';

describe('PanelListViewComponent', () => {
  let component: PanelListViewComponent;
  let fixture: ComponentFixture<PanelListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
