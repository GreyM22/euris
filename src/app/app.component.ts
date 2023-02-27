import {AfterViewInit, ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {StoreService} from "./services/state-data/store.service";
import {map, Observable, shareReplay} from "rxjs";
import {Store} from "./interfaces/store.interface";
import {MatDialog} from "@angular/material/dialog";
import {StoreViewComponent} from "./modals/store-view/store-view/store-view.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(
    private observer: BreakpointObserver,
    private store: StoreService,
    public dialog: MatDialog
  ) {
  }
  readonly store$: Observable<Store> = this.store.getStore$().pipe(
    shareReplay()
  );

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

  viewStore(store: Store) {
    this.dialog.open<StoreViewComponent, Store, undefined>(StoreViewComponent, {
      data: store,
      panelClass: 'modal-page',
      minWidth: '40vw'
    })
  }

}
