import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './service/authGuard.service';
import { NewProductPageComponent } from './pages/new-product-page/new-product-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'app',
        component: AppLayoutComponent,
        canActivate: [AuthGuard],
        data: { breadcrumb: 'App' },
        children: [
          {
            path: '',
            component: HomePageComponent,
            data: { breadcrumb: 'Home' },
          },
          {
            path: 'products',
            component: ProductsPageComponent,
            data: { breadcrumb: 'Products' },
          },
          {
            path: 'add-new-product',
            component: NewProductPageComponent,
            data: { breadcrumb: 'New Product' },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
