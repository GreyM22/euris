import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ModalPage} from "../../../models/modal-page/modal-page.class";
import {CreateProductComponent} from "../create-product/create-product.component";

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryCreateProductComponent extends ModalPage<CreateProductComponent> {
  protected modalComponent = CreateProductComponent;
}
