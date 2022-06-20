import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartsService } from '../service/carts.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() data:any={};
@Output() item= new EventEmitter();
// addButon:boolean=false;
// amount:number=0;
  constructor(private cartapi:CartsService) { }

  ngOnInit(): void {
  }
// add(){
//   this.item.emit({items:this.data,quantity:this.amount});
// }
addtoCard(item:any){

  this.cartapi.addToCard(item);
}
}
