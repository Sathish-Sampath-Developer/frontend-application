import { Product } from '../product';

export interface Manufacturer {
  id: number;
  manufacturer_image: string;
  manufacturer_name: string;
  manufacturer_email: string;
  manufacturer_phone: string;
  address_line_one: string;
  address_line_two: string;
  city: string;
  state: string;
  country: string;
  pin: string;
  orders: string[];
  products?: Product[];
  dateCreated: Date;
  dateModified: Date;
  createdBy: string;
  modifiedBy: string;
}

export interface ManufacturerStateModel {
  manufacturers: Manufacturer[];
  errorMessage: string;
}
