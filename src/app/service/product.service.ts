import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../store/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  baseUrl = 'http://localhost:9001/api/v1/private/products';

  constructor(private http: HttpClient, private router: Router) {}

  getListOfProduct() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.baseUrl, product);
  }

  getProductById(id: any) {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  updatedProduct(id: any, product: Product) {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: any) {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }
}
