import { Injectable } from '@angular/core';
import {LoadingClass} from "../../models/loader/loading.class";
import {Observable} from "rxjs";
import {CategoryCount} from "../../interfaces/category-count.interface";
import {CategoriesApiService} from "../data-providers/categories-api.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends LoadingClass {

  constructor(private categories: CategoriesApiService) {
    super();
  }

  getCategories$(): Observable<CategoryCount[]> {
    return this.categories.getCategoriesCount$();
  }
}
