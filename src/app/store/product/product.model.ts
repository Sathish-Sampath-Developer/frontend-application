import { Manufacturer } from '../manufacturer';
import { Merchant } from '../merchant';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  sku: string;
  thumbnail: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  productQuantity: number;
  productDateAvailable: Date;
  region: string;
  available: true;
  productQuantityOrderMin: number;
  productQuantityOrderMax: number;
  collection: string;
  seUrl: string;
  metaTagTitle: string;
  metaTagKeywords: string;
  metaTagDescription: string;
  variants: ProductVariant[];
  manufacturer?: Manufacturer;
  merchantStore?: Merchant;
  dateCreated: Date;
  dateModified: Date;
  createdBy: string;
  modifiedBy: string;
}

export interface ProductVariant {
  id: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
  dateAvailable: Date;
  available: true;
  dateCreated: Date;
  dateModified: Date;
  createdBy: string;
  modifiedBy: string;
}

export interface ProductStateModel {
  listOfProducts: Product[];
  errorMessage: string;
}
