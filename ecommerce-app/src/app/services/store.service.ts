import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url = 'https://fakestoreapi.com';

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit = '12', sort = 'high', category?: string): Observable<Array<Product>> {

    if (category === 'All') {
      category = undefined;
    }

    // return this.httpClient.request<Array<Product>>('GET', STORE_BASE_URL + '?' + 'sort=' + sort + '&limit=' + limit);
    return this.httpClient.get<Array<Product>>(
      `${this.url}/products${
        category ? '/category/' + category: ''
      }?limit=${limit}`).
      pipe(
        map(products => 
          products.sort((a, b) =>
            sort === 'high' ? b.price - a.price : a.price - b.price
          )
        )
      );
  }

  getAllCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(
      `${this.url}/products/categories`
    )
  }
}
