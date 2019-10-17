import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {tap,catchError} from 'rxjs/Operators'
import { throwError, Observable } from 'rxjs';
import { IProduct } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
private url='api/products.json'
  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this.url).pipe(tap(data=>(JSON.stringify(data))), catchError(this.handleError));
    }
    private handleError(err:HttpErrorResponse){
      console.log(err);
      return throwError(`error occured: ${err}`);
      
    }


  }