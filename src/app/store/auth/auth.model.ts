export interface LoginCredential {
  phoneOrEmail: string;
  password: string;
}

export interface AuthenticatedUser {
  message: string;
  token: string;
}

export interface AuthStateModel {
  loginCredential: LoginCredential;
  authToken: string;
  authErrorMessage: string;
  loginForm: {
    model: LoginCredential;
    dirty: boolean;
    status: string;
    errors: object;
  };
}
