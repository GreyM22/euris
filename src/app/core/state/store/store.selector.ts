import {createSelector} from "@ngxs/store";
import {StoreState} from "./store.state";
import {StoreModel} from "./store.model";
import {StoreData} from "../../../interfaces/store.interface";

export abstract class StoreSelector {
  public static Loading() {
    return createSelector<(...args:any[]) => boolean>(
      [StoreState],
      (instance: StoreModel.State) => instance.loading
    )
  }
  public static GetStore() {
    return createSelector<(...args:any[]) => StoreData | undefined>(
      [StoreState],
      (instance: StoreModel.State) => instance.store
    )
  }
}
