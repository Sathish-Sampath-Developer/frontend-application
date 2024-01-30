import { Product } from "../product";

export interface Merchant {
  id: number;
  retailer: boolean;
  storeName: string;
  storePhone: string;
  address_line_one: string;
  address_line_two: string;
  storeCity: string;
  storeState: string;
  storePin: string;
  storeCountry: string;
  dateBusinessSince: string;
  defaultLanguage: string;
  languages: string[];
  storeTemplate: string;
  invoiceTemplate: string;
  storeEmailAddress: string;
  storeLogo: string;
  currency: string;
  products?:Product[];
  dateCreated: Date;
  dateModified: Date;
  createdBy: string;
  modifiedBy: string;
}
