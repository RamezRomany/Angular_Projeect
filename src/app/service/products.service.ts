import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllProduct(){
    return this.http.get('https://fakestoreapi.com/products');
  }
  // getAllProduct(){
  //   return this.http.get('http://localhost:7000/products');
  // }
  getAllCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getProductsByCategory(keyword:string){
    return this.http.get('https://fakestoreapi.com/products/category/'+keyword);
  }
  getProductsById(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id);
  }
}


