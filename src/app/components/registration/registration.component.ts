import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  res:any;
  constructor(private userService:UserServicesService,private router:Router,private auth:AuthServiceService) { }

  ngOnInit(): void {
  }

  submit(userReg:any){
    console.log(userReg.value);    
   this.userService.registerUser(userReg.value).subscribe(res=>{
    //saving the response into the class variable
    this.res=res;
    console.log(this.res);
    //saving the token,user Id, User name into the local storage
    localStorage.setItem("token",this.res['token']);
    localStorage.setItem("userId",this.res['userId']);
    localStorage.setItem("userName",this.res['userName']);
    localStorage.setItem("isUserLoggedIn","true");
    //set is logged in service variable to true
    this.auth.isLoggedIn=true;
    //navigating the userHome page
    this.router.navigateByUrl('/userHome');
     },
    err=>{
      let er=err;
      if(er['status']==401)
      alert("Email Id already registered. Please enter different mail Id");
      else
      alert("Yor Back end server is not working properly may be server is not ON");   
       }
    );   
   }  
  }

