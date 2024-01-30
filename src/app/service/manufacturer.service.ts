import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Manufacturer } from '../store/manufacturer';

@Injectable({ providedIn: 'root' })
export class ManufacturerService {

  baseUrl = 'http://localhost:9001/api/v1/private/manufacturers';

  constructor(private http: HttpClient, private router: Router) {}

  getListOfManufacturer() {
    return this.http.get<Manufacturer[]>(this.baseUrl);
  }

  createManufacturer(manufacturer: Manufacturer) {
    return this.http.post<Manufacturer>(this.baseUrl, manufacturer);
  }

  getManufacturerById(id: any) {
    return this.http.get<Manufacturer>(`${this.baseUrl}/${id}`);
  }

  updatedManufacturer(id: any, manufacturer: Manufacturer) {
    return this.http.put<Manufacturer>(`${this.baseUrl}/${id}`, manufacturer);
  }

  deleteManufacturer(id: any) {
    return this.http.delete<Manufacturer>(`${this.baseUrl}/${id}`);
  }
}
