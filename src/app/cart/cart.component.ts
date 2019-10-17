import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  checkoutForm;

  products:Array<object>;
  constructor(private cartService:CartService, private formBuilder: FormBuilder) { }

  ngOnInit() {
this.products=this.cartService.getItemsInCart();

this.checkoutForm = this.formBuilder.group({
  name: '',
  address: '',
});

  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.products = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
