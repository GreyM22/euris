import {Product} from "../../interfaces/product.interface";

export module ProductsModel {
  export interface State {
    loadings: Record<string, boolean>;
    totalNrOfProducts: number;
    pageSize: number;
    pageNumber: number;
    activeProductId: Product['id'];
    products: Record<string, Product>;
  }
}
