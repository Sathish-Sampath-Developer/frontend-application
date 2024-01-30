import { Action, State, StateContext } from '@ngxs/store';
import { AuthStateModel } from './auth.model';
import { AuthActions } from './auth.actions';
import { AuthService } from 'src/app/service/auth.service';
import { catchError, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { handleError } from 'src/app/shared/utils/handleError';

const initialState = {
  loginCredential: {
    phoneOrEmail: '',
    password: '',
  },
  authErrorMessage: '',
  loginForm: {
    model: {
      phoneOrEmail: '',
      password: '',
    },
    dirty: false,
    status: '',
    errors: {},
  },
  authToken: '',
};

@State<AuthStateModel>({
  name: 'auth',
  defaults: initialState,
})
@Injectable({ providedIn: 'root' })
export class AuthState {

  constructor(private authService: AuthService, private route: Router) {}

  // ngxsOnInit(ctx: StateContext<AuthStateModel>) {
  //   ctx.dispatch(new AuthActions.AutoLogin());
  // }

  @Action(AuthActions.Login)
  public login(
    context: StateContext<AuthStateModel>,
    action: AuthActions.Login
  ) {
    return this.authService
      .login(action.payload.phoneOrEmail, action.payload.password)
      .pipe(
        tap((res) => {
          context.setState({
            ...context.getState(),
            authErrorMessage: '',
            authToken: res.token,
          });
          localStorage.setItem('authToken', res.token);
        }),
        catchError(async (errorRes) =>
          context.setState({
            ...context.getState(),
            authErrorMessage: handleError(errorRes),
          })
        )
      );
  }

  @Action(AuthActions.AutoLogin)
  public autoLogin(
    context: StateContext<AuthStateModel>,
    action: AuthActions.AutoLogin
  ) {
    const authToken: any = localStorage.getItem('authToken');

    if (!authToken) {
      return;
    }

    if (authToken) {
      context.setState({
        ...context.getState(),
        authErrorMessage: '',
        authToken: authToken,
      });
    }
  }
}
