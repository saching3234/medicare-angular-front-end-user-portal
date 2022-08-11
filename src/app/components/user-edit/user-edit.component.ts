import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/interface/user-interface';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  userReg:any;
  user:any;
  constructor(private userSrevice:UserServicesService,private router:Router) { }

  ngOnInit(): void {
    this.getUserdetails();
  }
  
  //getting the user details from server
  getUserdetails(){
    this.userSrevice.getUserDetails().subscribe(res=>{
      this.user=res;
      console.log(res);
  
     },err=>{
      console.log("Error while fetching the response: ",err);
     })
    }  


  submit(userReg){
     
    this.userSrevice.updateUser(userReg.form.value).subscribe(res=>{
      
      alert("User Detais Updated Successfully")
      this.router.navigate(["/userprofile"]);
    },
     err=>{
      console.log("Error while updating the user : ",err);
      alert("Error While updating the user details "+err);
     }
    )
    
  }

  //method for cancel the updation and move to the user profile 
  cancel(){
   this.router.navigate(["/userprofile"])
  }
}
