import { Action, State, StateContext } from '@ngxs/store';
import { ManufacturerStateModel } from './manufacturer.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ManufacturerService } from 'src/app/service/manufacturer.service';
import { ManufacturerActions } from './manufacturer.actions';
import { catchError, tap } from 'rxjs';
import { handleError } from 'src/app/shared/utils/handleError';

const initialState = {
  manufacturers: [],
  errorMessage: '',
};

@State<ManufacturerStateModel>({
  name: 'manufacturerStore',
  defaults: initialState,
})
@Injectable({ providedIn: 'root' })

export class ManufacturerState {
  
  constructor(
    private manufacturerService: ManufacturerService,
    private route: Router
  ) {}

  ngxsOnInit(ctx: StateContext<ManufacturerStateModel>) {
    ctx.dispatch(new ManufacturerActions.FetchListOfManufacturer());
  }

  @Action(ManufacturerActions.FetchListOfManufacturer)
  public fetchListOfManufacturer(
    context: StateContext<ManufacturerStateModel>
  ) {
    return this.manufacturerService.getListOfManufacturer().pipe(
      tap((res) =>
        context.setState({
          ...context.getState(),
          errorMessage: '',
          manufacturers: res,
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
