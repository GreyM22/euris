import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {filter, map, Observable, shareReplay} from "rxjs";
import {StoreData} from "./core/interfaces/store.interface";
import {MatDialog} from "@angular/material/dialog";
import {StoreViewComponent} from "./modals/store-view/store-view/store-view.component";
import {Store} from "@ngxs/store";
import {StoreState} from "./core/state/store/store.state";
import {StoreActions} from "./core/state/store/store.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(
    private observer: BreakpointObserver,
    private store: Store,
    // private store: StoreService,
    public dialog: MatDialog
  ) {
  }
  readonly store$: Observable<StoreData> = this.store.select(StoreState.GetStore()).pipe(
    filter((store): store is StoreData => !!store),
    shareReplay()
  );

  ngOnInit() {
    this.store.dispatch(new StoreActions.GetStore());
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  viewStore(store: StoreData) {
    this.dialog.open<StoreViewComponent, StoreData, undefined>(StoreViewComponent, {
      data: store,
      panelClass: 'modal-page',
      minWidth: '40vw'
    })
  }

}
