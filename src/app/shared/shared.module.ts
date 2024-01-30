import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';

import { SideNavbarComponent } from './ui/side-navbar/side-navbar.component';
import { ToolbarComponent } from './ui/toolbar/toolbar.component';
import { AppLogoComponent } from './ui/app-logo/app-logo.component';
import { FormContainerComponent } from './ui/form/form-container/form-container.component';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './ui/form/product-form/product-form.component';
import { BreadcrumbComponent } from './ui/breadcrumb/breadcrumb.component';
import { PageHeaderComponent } from './ui/page-header/page-header.component';
import { SearchInputComponent } from './ui/search-input/search-input.component';
import { ProductTableComponent } from './ui/product-table/product-table.component';

@NgModule({
  declarations: [
    SideNavbarComponent,
    ToolbarComponent,
    AppLogoComponent,
    FormContainerComponent,
    ProductFormComponent,
    BreadcrumbComponent,
    PageHeaderComponent,
    SearchInputComponent,
    ProductTableComponent,
  ],
  exports: [
    SideNavbarComponent,
    ToolbarComponent,
    AppLogoComponent,
    FormContainerComponent,
    ProductFormComponent,
    BreadcrumbComponent,
    SearchInputComponent,
    ProductTableComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTableModule,
  ],
})
export class SharedModule {}
