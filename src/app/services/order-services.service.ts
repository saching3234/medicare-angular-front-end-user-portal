import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServicesService {

  private orderUrl="http://localhost:4201/api/users/orders"

  constructor(private http:HttpClient) { }


 //method for getting the current user order details
 getOrderDetails(){
  let token="Bearer"+localStorage.getItem("token");
  let headers=new HttpHeaders().set('Authorization',token);
  return this.http.get(this.orderUrl+'/getAllOrders',{headers});
    }
 }