import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { IProduct } from './product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:IProduct[];
  errorMsg: any;
  constructor(private productService: ProductListService) {

   }

  ngOnInit() {

    this.productService.getProducts().subscribe
                  (
                      products=>this.products=products,   
                      error=>this.errorMsg=<any>error
                  );
  }
 

onShareBtn():void{
  alert("The product is shared")
}

onNotify():void{
  alert("The product goes on sale")
}

}
