import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url = 'https://fakestoreapi.com';

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit = '12', sort = 'desc', category?: string): Observable<Array<Product>> {

    // return this.httpClient.request<Array<Product>>('GET', STORE_BASE_URL + '?' + 'sort=' + sort + '&limit=' + limit);
    return this.httpClient.get<Array<Product>>(
      `${this.url}/products${
        category ? '/category/' + category: ''
      }?sort=${sort}&limit=${limit}`);
  }

  getAllCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(
      `${this.url}/products/categories`
    )
  }
}
