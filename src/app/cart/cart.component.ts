import { Component, OnInit } from '@angular/core';
import { CartsService } from '../service/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // cartProduct:any[]=[];
  products:any=[];
allProducts:any=0;
  constructor(private cartapi:CartsService) { }

  ngOnInit(): void {
    this.cartapi.getProductData().subscribe(res=>{
      this.products=res;
      this.allProducts=this.cartapi.getTotalAmount();
    })

  }
    
    // this.getCartProduct();
  
  removeProduct(item:any){
    this.cartapi.removeCartData(item);
    }
    removeAllProduct(){
    
      this.cartapi.removeAllCart();
    }
// getCartProduct(){
//   if ("cart" in localStorage) {
//     this.cartProduct=JSON.parse(localStorage.getItem("cart")!);
//     console.log(this.cartProduct);
// }
// }
}