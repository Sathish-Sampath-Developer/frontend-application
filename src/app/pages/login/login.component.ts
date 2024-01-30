import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState, AuthStateModel } from 'src/app/store/auth';
import { AuthActions } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginData: FormGroup;

  errorMessage!: string;

  constructor(private store: Store, private router: Router) {
    this.loginData = new FormGroup({
      phoneOrEmail: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,50}$/
        ),
      ]),
    });
  }

  ngOnInit(): void {
    this.store
      .select((state: any) => state.auth)
      .subscribe((authState: AuthStateModel) => {
        this.errorMessage = authState.authErrorMessage;
        if (authState.authToken) {
          this.router.navigate(['/app']);
        }
      });
  }

  handleSubmit() {
    if (this.loginData.valid) {
      this.store.dispatch(new AuthActions.Login(this.loginData.value));
    } else {
      this.loginData.markAllAsTouched();
    }
  }
}
