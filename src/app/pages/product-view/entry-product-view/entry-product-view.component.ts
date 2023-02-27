import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProductViewComponent} from "../product-view/product-view.component";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {ModalPage} from "../../../models/modal-page/modal-page.class";

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryProductViewComponent extends ModalPage<ProductViewComponent> {

  protected modalComponent = ProductViewComponent;
}
