import { Product } from './product.model';

export namespace ProductActions {

  export class FetchListOfProduct {
    static readonly type = '[Product] FetchListOfProduct';
  }

  export class FetchProductById {
    constructor(public payload: any) {}
    static readonly type = '[Product] FetchProductById';
  }

  export class CreateNewProduct {
    constructor(public payload: Product) {}
    static readonly type = '[Product] CreateNewProduct';
  }

  export class UpdateProduct {
    constructor(public payload: { id: any; Product: Product }) {}
    static readonly type = '[Product] UpdateProduct';
  }

  export class DeleteProduct {
    constructor(public payload: any) {}
    static readonly type = '[Product] DeleteProduct';
  }

}
