import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  productId: number;
  constructor(private activeRoute: ActivatedRoute) {
    this.productId = this.activeRoute.snapshot.params.id
  }

  ngOnInit() {
  }

}
