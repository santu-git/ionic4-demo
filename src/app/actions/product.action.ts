import { Product } from "../models/product.model";

//import { Bill } from "../models/bill.model";

export class ProductListing {
  static readonly type = '[Product] Listing'

  constructor(public payload: Product[]) { }
}

export class AddProduct {
  static readonly type = '[Product] Add'
  constructor(public payload: Product) { }
}