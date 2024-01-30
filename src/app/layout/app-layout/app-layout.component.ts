import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {
  isAuthenticated = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select((state: any) => state.auth.authToken)
      .subscribe((token) => {
        this.isAuthenticated = !!token;
      });
  }
}
