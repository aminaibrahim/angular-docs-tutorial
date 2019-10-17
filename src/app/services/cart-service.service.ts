import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items:object[]=[];

addToCart(item:object){
 this.items.push(item);
  }


  getItemsInCart():Array<object>{
    return this.items;
}

clearCart(){
  this.items=[];
  return this.items;
}
}
