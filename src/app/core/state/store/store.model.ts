import {StoreData} from "../../../interfaces/store.interface";

export module StoreModel {
  export interface State {
    loading: boolean;
    store?: StoreData;
  };
}
