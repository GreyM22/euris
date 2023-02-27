import {Directive, OnDestroy, OnInit, Type} from "@angular/core";
import {Subject, takeUntil} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductViewComponent} from "../../pages/product-view/product-view/product-view.component";
import {ComponentType} from "@angular/cdk/portal";

@Directive()
export abstract class ModalPage<T> implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();
  protected abstract modalComponent: ComponentType<T>;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    const dialogRef = this.dialog.open<T, undefined, undefined>(
      this.modalComponent,
      {panelClass: 'modal-page', minWidth: '50vw', minHeight: '40vh', maxHeight: '80vh'}
    ).afterClosed();
    dialogRef
      .pipe(
        takeUntil(this.onDestroy$)
      ).subscribe(
      res => this.router.navigate(['..'], {relativeTo: this.route})
    )
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
