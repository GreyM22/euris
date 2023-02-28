import { Injectable } from '@angular/core';
import {LoadingClass} from "../../models/loader/loading.class";
import {catchError, finalize, Observable} from "rxjs";
import {CategoryCount} from "../../interfaces/category-count.interface";
import {CategoriesApiService} from "../data-providers/categories-api.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SNACKBAR_OPTIONS} from "../../consts/snackbar/snackbar.options";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends LoadingClass {

  constructor(
    private categories: CategoriesApiService,
    private snackBar: MatSnackBar

  ) {
    super();
  }

  getCategories$(): Observable<CategoryCount[]> {
    this.startLoading()
    return this.categories.getCategoriesCount$().pipe(
      finalize(() => this.endLoading()),
      catchError((err) => {
        this.snackBar.open('Error getting the category stats', '', SNACKBAR_OPTIONS);
        console.error('Error getting the category stats err => ', err);
        throw err;
      })
    );
  }
}
