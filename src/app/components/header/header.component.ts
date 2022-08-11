import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoggedstatus:any;
  constructor(private router:Router,private auth :AuthServiceService) { }

  ngOnInit(): void {
   
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd" ||localStorage.getItem("isUserLoggedIn")=='true') {
       this.userLoggedstatus = true
      }
      else{
        this.userLoggedstatus = false;
      }
    }) 
  
  }

}
