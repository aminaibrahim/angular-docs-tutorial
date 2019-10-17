import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product-list/product';
 import {CartService} from '../services/cart-service.service'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

product:IProduct;
  constructor(private routerparam: ActivatedRoute,private router:Router,private cartService:CartService) {
   }

  ngOnInit() {
   let id=this.routerparam.snapshot.paramMap.get('id');
   this.product= 

   {
    "id":3,
    "name": "Phone Standard",
    "price":900,
    "desc":"good backup"
  }
  }
  OnPrevious():void{
    this.router.navigate(['/products']);
  }

  addToCartFn(item:object):void{
    
    this.cartService.addToCart(item)

  }
}
