import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';
//Injectable görürsen bu bir service'dir
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44369/api/Products/GetAll';
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
   return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl)
  }
}
