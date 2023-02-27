import { Injectable } from '@angular/core';
import {finalize, Observable} from "rxjs";
import {StoreApiService} from "../data-providers/store-api.service";
import {Store} from "../../interfaces/store.interface";
import {LoadingClass} from "../../models/loader/loading.class";

@Injectable({
  providedIn: 'root'
})
export class StoreService extends LoadingClass {

  constructor(private storeApi: StoreApiService) {
    super();
  }

  getStore$(): Observable<Store> {
    this.startLoading();
    return this.storeApi.getStore().pipe(
      finalize(() => this.endLoading())
    )
  }
}
