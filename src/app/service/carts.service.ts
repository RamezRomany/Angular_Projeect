import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  cartDataList:any=[];
  productList=new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }
  getProductData(){
    return this.productList.asObservable();
 
   }
  addToCard(product:any){
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
      }

getTotalAmount(){
  let grandTotal=0;
  this.cartDataList.map((a:any)=>{
    grandTotal+=a.total;
  })
}
removeCartData(product:any){
  this.cartDataList.map((a:any,index:any)=>{
  if (product.id===a.id) {
    this.cartDataList.splice(index,1);
  }})
  this.productList.next(this.cartDataList);
    }
  // remove all Cart
    removeAllCart(){
  this.cartDataList=[];
  this.productList.next(this.cartDataList);
    }
  
 
 // set Product Data
   setProduct(product:any){
 this.cartDataList.push(...product);
 this.productList.next(product);
   }
 
 
 
 
}