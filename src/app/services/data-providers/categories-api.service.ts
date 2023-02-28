import { Injectable } from '@angular/core';
import {ApiHandler} from "../../models/api/api-handler.abstract";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoryCount} from "../../interfaces/category-count.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService extends ApiHandler {
  protected namespace = `stats/categories`;

  constructor(private http: HttpClient) {
    super()
  }

  getCategoriesCount$(): Observable<CategoryCount[]> {
    return this.http.get<CategoryCount[]>(this.endpoint);
  }
}
