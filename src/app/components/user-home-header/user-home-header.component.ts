import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-user-home-header',
  templateUrl: './user-home-header.component.html',
  styleUrls: ['./user-home-header.component.css']
})
export class UserHomeHeaderComponent implements OnInit {
  userName=localStorage.getItem("userName");

  constructor(private route: Router,private auth :AuthServiceService) { }

  ngOnInit(): void {
  }

  logOut(){
  localStorage.clear();
  this.auth.isLoggedIn=false;
  //alert("called logout");
  this.route.navigate(["/"]);   
  }

  searchByBrand(txtBrandName){
    alert(txtBrandName.value)
    this.route.navigateByUrl("/searchByBrand/"+txtBrandName.value);    
  }

}
