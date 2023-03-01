import {StoreModel} from "./store.model";
import {Action, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {StoreApiService} from "../../../services/data-providers/store-api.service";
import {StoreActions} from "./store.actions";
import {finalize, map, mergeMap} from "rxjs";
import {StoreSelector} from "./store.selector";

@State<StoreModel.State>({
  name: 'store',
  defaults: {
    loading: false
  }
})
@Injectable()
export class StoreState extends StoreSelector{
  constructor(private storeApi: StoreApiService) {
    super();
  }

  @Action(StoreActions.GetStore)
  getStore(ctx: StateContext<StoreModel.State>) {
    ctx.patchState({loading: true});
    return this.storeApi.getStore().pipe(
      map(store => ctx.patchState({store})),
      finalize(() => ctx.patchState({loading: false}))
    )
  }

}
