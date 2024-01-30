import { Action, State, StateContext } from '@ngxs/store';
import { ManufacturerStateModel } from '../manufacturer';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductActions } from './product.actions';
import { catchError, tap } from 'rxjs';
import { handleError } from 'src/app/shared/utils/handleError';
import { ProductStateModel } from './product.model';
import { ProductService } from 'src/app/service/product.service';

const initialState = {
  listOfProducts: [],
  errorMessage: '',
};

@State<ProductStateModel>({
  name: 'productStore',
  defaults: initialState,
})
@Injectable({ providedIn: 'root' })
export class ProductState {

  constructor(private productService: ProductService, private route: Router) {}

  ngxsOnInit(ctx: StateContext<ManufacturerStateModel>) {
    ctx.dispatch(new ProductActions.FetchListOfProduct());
  }

  @Action(ProductActions.FetchListOfProduct)
  public fetchListOfManufacturer(context: StateContext<ProductStateModel>) {
    return this.productService.getListOfProduct().pipe(
      tap((res) =>
        context.setState({
          ...context.getState(),
          errorMessage: '',
          listOfProducts: res,
        })
      ),
      catchError(async (errorRes) =>
        context.setState({
          ...context.getState(),
          errorMessage: handleError(errorRes),
        })
      )
    );
  }
}
