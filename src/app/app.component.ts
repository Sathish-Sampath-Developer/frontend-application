import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { initFlowbite } from 'flowbite';
import { AuthActions, AuthStateModel } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'eshop-admin';

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    initFlowbite();
    this.store
      .dispatch(new AuthActions.AutoLogin())
      .subscribe((authState: AuthStateModel) => {
        if (authState.authToken) {
          this.router.navigate(['/app']);
        }
      });
  }
}
