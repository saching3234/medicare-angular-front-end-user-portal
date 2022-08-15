import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  private url="http://18.209.43.115:4201/api/users";
  private url2="http://18.209.43.115:4201/api/users/change"

  constructor(private httpClient:HttpClient) { }

  //method for updating the current user details
  updateUser(user:any){
    let token="Bearer"+localStorage.getItem("token");
    let headers=new HttpHeaders().set('Authorization',token);
    return this.httpClient.post(this.url2+'/changeUserDetails',user,{headers});

  }
  
  //method for getting the current user details
  getUserDetails(){
    let token="Bearer"+localStorage.getItem("token");
    let headers=new HttpHeaders().set('Authorization',token);
    return this.httpClient.get(this.url2+'/getCurrentUser',{headers});
  }

  //method for login the user
  checkLogin(user:any){
  console.log(user)
  return this.httpClient.post(this.url+'/login',user);
  }

  //method for register the user
  registerUser(user:any){
    console.log("register user service method called :",user);
    return this.httpClient.post(this.url+'/register',user);
  }

  //get category details method
  getCat(){
    return this.httpClient.post(this.url,'');
  }

}
