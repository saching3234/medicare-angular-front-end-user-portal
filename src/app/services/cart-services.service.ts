import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {
  
  private cartUrl="http://localhost:4201/api/users/cart";
  private orderUrl="http://localhost:4201/api/users/orders"

  constructor(private http:HttpClient) { }

  //method for saving the product into the cart
  saveIntoCart(product){
    //getting the locall saved token
    let token="Bearer"+localStorage.getItem("token");
    let headers=new HttpHeaders().set('Authorization',token);
    return this.http.post(this.cartUrl+'/saveCart',product,{headers});
}

 //method for getting the all product from the cart
 getCatDetails(){
  let token="Bearer"+localStorage.getItem("token");
  let headers=new HttpHeaders().set('Authorization',token);
  return this.http.get(this.cartUrl+'/getCartDetails',{headers});

 }

 //method for removing the product from cart 
 removeFromCart(cartId:any){
  //getting the token of current user from local storage
  let token="Bearer"+localStorage.getItem("token");
  let headers=new HttpHeaders().set('Authorization',token);
  return this.http.delete(this.cartUrl+'/deleteFromCart/'+cartId,{headers});
 }

 //method for saving the product details and making the payment
 saveOrders(carts: any) {
    //getting the token of current user from local storage
    let token="Bearer"+localStorage.getItem("token");
    let headers=new HttpHeaders().set('Authorization',token);
    return this.http.post(this.orderUrl+'/saveAllOrders',carts,{headers});
 }

 //method for removing the all products from cart after making the payment
 removeAllFromCart(){
      //getting the token of current user from local storage
      let token="Bearer"+localStorage.getItem("token");
      let headers=new HttpHeaders().set('Authorization',token);
      return this.http.delete(this.cartUrl+'/deleteAllProductsFromCart',{headers});
 }
  
 



}
