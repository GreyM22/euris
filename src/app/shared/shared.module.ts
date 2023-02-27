import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AddToArrayPipe } from './pipes/add-to-array.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    AddToArrayPipe
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoaderComponent,
    AddToArrayPipe
  ]
})
export class SharedModule { }
