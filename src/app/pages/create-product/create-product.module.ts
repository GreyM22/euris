import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryCreateProductComponent } from './entry-create-product/entry-create-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SharedModule} from "../../shared/shared.module";


const childRoutes: Routes = [
  {
    path: '',
    component: EntryCreateProductComponent
  }
];
@NgModule({
  declarations: [
    EntryCreateProductComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    SharedModule,
  ]
})
export class CreateProductModule { }
