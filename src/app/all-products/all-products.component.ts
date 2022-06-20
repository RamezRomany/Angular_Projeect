import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
products:any[]=[];
categories:any[]=[];
cartProduct:any[]=[];
  constructor(private productsService:ProductsService) { }


  //hena bktb el fun ali 3wza tsht8l awel ma page tzhar
  ngOnInit(): void {
  this.getProduct();
  this.getCategories();
  }
  // bst5dm subscribe 3lshan be elmagra maben front w back 
  //get Data
getProduct(){
  this.productsService.getAllProduct().subscribe((res:any)=>{
    //b7fz el data gwa array dah;
    this.products=res;

  } , error=>{
    alert("error");
  })
}
getCategories(){
  this.productsService.getAllCategories().subscribe((res:any)=>{
    //b7fz el data gwa array dah;
    this.categories=res;

  } , error=>{
    alert("error");
  })
}

filterCategory(event:any){
  let val = event.target.value;
  if (val == "all") {
    this.getProduct();
  }else{
    this.getProductCategory(val);
  }
  
}
getProductCategory(keyword:string){
  this.productsService.getProductsByCategory(keyword).subscribe((res:any)=>{
    this.products=res;
  })
}  

addToCart(event:any){
  if ("cart" in localStorage) {
    this.cartProduct=JSON.parse(localStorage.getItem("cart")!);
    let exist=this.cartProduct.find(item => item.item.id == event.item.id);
    if (exist) {
      alert("product is already in your cart")
      
    }else{
      this.cartProduct.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartProduct));
    }
  
  }else{
    this.cartProduct.push(event);
    localStorage.setItem("cart",JSON.stringify(this.cartProduct));
  }

}

}
