import { LoginCredential } from "./auth.model";

export namespace AuthActions {
  export class Login {
    static readonly type = '[Auth] Login';
    constructor(public payload: LoginCredential) {}
  }
  export class AutoLogin {
    static readonly type = '[Auth] AutoLogin';
    constructor() {}
  }
}
