import {Product} from "../../../interfaces/product.interface";

export namespace ProductsActions {
  export class SetPageSize {
    public static type = '[PRODUCTS] Set page size';

    constructor(public pageSize: number) {
    }
  }

  export class SetActiveProduct {
    public static type = '[PRODUCTS] Set active product';

    constructor(public id: Product['id']) {
    }
  }

  export class LoadProductsPage {
    public static type = '[PRODUCTS] Load product page';

    constructor() {
    }
  }

  export class GetFirstProductsPage {
    public static type = '[PRODUCTS] Get First Product Page';

    constructor() {
    }
  }

  export class GetNextProductsPage {
    public static type = '[PRODUCTS] Get Next Product Page';

    constructor() {
    }
  }

  export class AddProduct {
    public static type = '[PRODUCTS] Add product';

    constructor(public payload: Omit<Product, 'id'>) {
    }
  }

  export class DeleteProduct {
    public static type = '[PRODUCTS] Delete product';

    constructor(public id: Product['id']) {
    }
  }

  export class MakeRefresh {
    public static type = '[PRODUCTS] Make Refresh';

    constructor() {
    }
  }

  export class GetProduct {
    public static type = '[PRODUCTS] Get Product';

    constructor(public id: Product['id']) {
    }
  }


}
