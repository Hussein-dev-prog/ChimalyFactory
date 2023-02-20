import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Product } from './Product';
@Injectable({
  providedIn: 'root'
})

export class DataService {
  baseUrl: string = 'http://localhost/Angular-php/';


  constructor(private http: HttpClient) { }
  getProducts() {
     return this.http.get<Product[]>(this.baseUrl+'view.php');
     }
     deleteProduct(id:any) {
      console.log(id);
      return this.http.delete(this.baseUrl+'delete.php?id='+ id);  
      //HttpClient.delete(): Constructs an observable that, when subscribed, causes the configured DELETE request to execute on the server.
    }   
    getSingleProduct(id:any) {
      return this.http.get<Product[]>(this.baseUrl+'view.php?id='+id);
    } 
  
    editProduct(product:any) {
      return this.http.put(this.baseUrl+'update.php', product);  
   }  
   createProduct(product:any) {
    return this.http.post(this.baseUrl+'insert.php', product);  
  } 

  
  
}
