import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
id:any
data:any={};
  constructor(private route:ActivatedRoute, private productDetail:ProductsService) {
    this.id=this.route.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
    this.getproduct();
  }
getproduct(){
  this.productDetail.getProductsById(this.id).subscribe(res=>{
this.data=res
  })
}
}
