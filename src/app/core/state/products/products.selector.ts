import {createSelector} from "@ngxs/store";
import {ProductsState} from "./products.state";
import {ProductsModel} from "./products.model";
import {Product} from "../../interfaces/product.interface";

export abstract class ProductsSelector {
  public static PageSize() {
    return createSelector<(...args:any[]) => number>(
      [ProductsState],
      (instance: ProductsModel.State) => instance.pageSize
    )
  }
  public static GetActiveProduct() {
    return createSelector<(...args:any[]) => Product>(
      [ProductsState],
      (instance: ProductsModel.State) => instance.products[instance.activeProductId]
    )
  }
  public static GetProducts() {
    return createSelector<(...args:any[]) => Product[]>(
      [ProductsState],
      (instance: ProductsModel.State) => Object.values(instance.products)
    )
  }

  public static GetNrOfProducts() {
    return createSelector<(...args:any[]) => number>(
      [ProductsState],
      (instance: ProductsModel.State) => Object.keys(instance.products).length
    )
  }

  public static GetTotalNrOfProducts() {
    return createSelector<(...args:any[]) => number>(
      [ProductsState],
      (instance: ProductsModel.State) => instance.totalNrOfProducts
    );
  }
  public static Loading(key: string) {
    return createSelector<(...args:any[]) => boolean>(
      [ProductsState],
      (instance: ProductsModel.State) => instance.loadings[key]
    );
  }

  public static GetProduct(id: Product['id']) {
    return createSelector<(...args:any[]) => Product>(
      [ProductsState],
      (instance: ProductsModel.State) => instance.products[id]
    );
  }
}
