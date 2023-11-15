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

  getAllProducts(limit = '12', sort = 'desc'): Observable<Array<Product>> {

    // return this.httpClient.request<Array<Product>>('GET', STORE_BASE_URL + '?' + 'sort=' + sort + '&limit=' + limit);
    return this.httpClient.get<Array<Product>>(
      `${this.url}/products?sort=${sort}&limit=${limit}`);
  }
}
