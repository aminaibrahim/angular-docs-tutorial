import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private http:HttpClient) { }


getShippingDetails():Observable<object[]>{
  return this.http.get<object[]>('/api/shipping.json');

  }
}
