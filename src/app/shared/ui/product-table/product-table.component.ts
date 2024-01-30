import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from 'src/app/store/product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
  step = 0;
  displayedColumns: string[] = ['id', 'title', 'price', 'sku', 'productQuantity'];
  products!: Product[];

  constructor(private store: Store) {
    this.store
      .select((state: any) => state.productStore.listOfProducts)
      .subscribe((data) => {
        this.products = data;
      });
  }

  ngOnInit(): void {}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
