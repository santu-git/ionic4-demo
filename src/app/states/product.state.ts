// Section 1
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from '../models/product.model';
import { ProductListing } from '../actions/product.action';

export class ProductStateModel {
  products: Product[];
}

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: []
  }
})


export class ProductState {

  @Selector()
  static getProducts(state: ProductStateModel) {
    return state.products;
  }

  @Action(ProductListing)
  fetch({ getState, setState }: StateContext<ProductStateModel>, { payload }: ProductListing) {
    setState({
      products: payload
    })
  }

  // @Action(AddProduct)
  // add({ getState, setState }: StateContext<ProductStateModel>, { payload }: ProductListing) {
  //   const products = getState().products;
  //   //this.prodcustService.add()
  //   setState({
  //     products: [...products,data]
  //   })
  // }
}

