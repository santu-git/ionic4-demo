import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductState } from '../states/product.state';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private productService: ProductService) { }

  @Select(ProductState.getProducts) products$: Observable<Product[]>

  ngOnInit() {
    this.productService.lisProducts();
  }

}
