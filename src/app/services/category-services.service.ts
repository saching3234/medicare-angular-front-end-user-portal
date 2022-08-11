import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServicesService {
  
  private url="http://localhost:4201/api/users/category/getCat";
  constructor(private http:HttpClient) { }
  //method for getting the all category details
  getAllCat(){
    //getting the locall saved token
    let token="Bearer"+localStorage.getItem("token");
    let headers=new HttpHeaders().set('Authorization',token).set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.url,{headers:headers});
  }

}
