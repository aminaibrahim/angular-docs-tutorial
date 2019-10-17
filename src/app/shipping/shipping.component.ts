import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../services/shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  errorMsg: any;

  constructor(private shippingService:ShippingService) { }
shippingDetails;
  ngOnInit() {
    this.shippingService.getShippingDetails().subscribe(
      shippingCost=>this.shippingDetails=shippingCost),error=>this.errorMsg=<any>error;
      
  

    }
  

}
