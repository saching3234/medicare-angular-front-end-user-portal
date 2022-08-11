import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderServicesService } from 'src/app/services/order-services.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders:any;

  constructor(private orderService:OrderServicesService, private router:Router) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

//method for fetching the all oders details of current user
fetchOrders(){
  this.orderService.getOrderDetails().subscribe(res=>{
    //saving the oders into the property
    this.orders=res; 
    console.log(this.orders);   
  },
  err=>{//if the token is not valid redirect to login page
  if(err.error.status==403){
  alert("something went wrong\n "+err.error.message);
  //clearing the local storage
  localStorage.clear();
   this.router.navigate(['/']);
  }
  else
  alert("Your Back End server may be  offline")
})
}




}
