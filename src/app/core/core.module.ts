import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxsModule} from "@ngxs/store";
import {environment} from "../../environments/environment";
import {StoreState} from "./state/store/store.state";
import {ProductsState} from "./state/products/products.state";

const STATES = [
  StoreState,
  ProductsState
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot(STATES, {
      developmentMode: !environment.production
    })
  ]
})
export class CoreModule { }
