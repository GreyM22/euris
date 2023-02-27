import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Store} from "../../interfaces/store.interface";
import { ApiHandler } from '../../models/api/api-handler.abstract';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService extends ApiHandler {
  protected namespace = ``;

  constructor(private http: HttpClient) {
    super();
  }

  getStore(): Observable<Store> {
    return this.http.get<Store>(this.endpoint);
  }
}
