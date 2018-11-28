import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { ProductListing } from '../actions/product.action';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private store: Store) { }

  lisProducts() {
    setTimeout(() => {
      return this.http.get('https://testproject-aa287.firebaseio.com/recipes.json?auth=YBW4iVxHSOlAW4gXWD7TDmBYZvVuovYBZNVlkM71').subscribe(
        data => {
          this.store.dispatch(new ProductListing(Array.from(Object.keys(data), k => data[k])))
        }
      )
    }, 5000)

  }

  // addProduct(){
  //   return this.http.post('https://testproject-aa287.firebaseio.com/recipes.json?auth=YBW4iVxHSOlAW4gXWD7TDmBYZvVuovYBZNVlkM71').subscribe(
  //       data => {
  //       },
  //       error => console.log(error)
  //     )
  // }
}
