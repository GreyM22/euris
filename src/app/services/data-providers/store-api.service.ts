import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StoreData} from "../../interfaces/store.interface";
import { ApiHandler } from '../../models/api/api-handler.abstract';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService extends ApiHandler {
  protected namespace = ``;

  constructor(private http: HttpClient) {
    super();
  }

  getStore(): Observable<StoreData> {
    return this.http.get<StoreData>(this.endpoint);
  }
}
