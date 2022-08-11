import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  private url="http://localhost:4201/api/users/products/getCatProduct";
  private url2="http://localhost:4201/api/users/products/getProductByBrandName"

  constructor(private http:HttpClient) { }

  //method for getting the product details of selected category
   getProducts(cid){
        //getting the local saved token
        let token="Bearer"+localStorage.getItem("token");
        const body={cid:cid};
        let headers=new HttpHeaders().set('Authorization',token);
        return this.http.post(this.url,body,{headers});
   }

   getProductsBrandName(brandName){
     //getting the local saved token
     let token="Bearer"+localStorage.getItem("token");
     const body={brand:brandName};
     let headers=new HttpHeaders().set('Authorization',token);
     return this.http.post(this.url2,body,{headers});   
   }

}
