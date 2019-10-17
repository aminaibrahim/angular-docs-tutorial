import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ShippingComponent} from './shipping/shipping.component'
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
 
    
  ],
  imports: [
BrowserModule,
ReactiveFormsModule,
FormsModule,
HttpClientModule,
RouterModule.forRoot([ 
  {path :"cart", component:CartComponent},
  {path:"products" , component:ProductListComponent},
  {path:'product/:id', component:ProductDetailsComponent},
  {path:"shipping" , component:ShippingComponent},

])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
