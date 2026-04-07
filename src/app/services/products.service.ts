import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/Iproduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<IProduct[]>(`https://fakestoreapi.com/products`);
  }
}
