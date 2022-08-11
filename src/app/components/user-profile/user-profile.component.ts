import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 user:any;

  constructor(private userSrevice:UserServicesService,private router:Router) { }

  ngOnInit(): void {
   this.userSrevice.getUserDetails().subscribe(res=>{
    this.user=res;
    console.log(res);

   },err=>{
    console.log("Error while fetching the response: ",err);
   })
  }

  userEdit(){
   this.router.navigate(['/userEdit']);
  }

}
