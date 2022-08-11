import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServicesService } from 'src/app/services/cart-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  carts:any;
  total_price:number=0;
  emptycart="emptycart.png";
   
  paymentRequest={
    apiVersion:2,
     apiVersionMinor:0,
     allowedPaymentMethods:[
       {type:"CARD",
        parameters:{
          allowedPaymentMethod:["PAN_ONLY","CRYPTOGRAM_3DS"],
          allowedCardNetworks:["AMEX","VISA","MASTERCARD","RUPAY"]
        },
         tokenizationSpecification:{
          type:"PAYMENT_GATEWAY",
          parameters:{
            gateway:"example",
            gatewayMerchantId:"exampleMerchantId"
          }
         }
        }
     ],
     merchantInfo:{
      merchantId:"1448-0943-1900",
      merchantName:"Sachin Gawade"
     },
     transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabel:"Total",
      totalPrice:"100.00",
      currencyCode:"INR",
      countryCode:"IND",      
     }
  };

  onLoadPaymentData(event:any){
    console.log("Load Payment detaisl: ",event.detaisl)
  }

  constructor(private cartService:CartServicesService,private router:Router) { }

  ngOnInit(): void {
    this.fetchCart();
  }
  
  //method for fetching the all cart products from server
  fetchCart(){
    this.cartService.getCatDetails().subscribe(res=>{
      this.carts=res;
      //total price calculation
      this.total_price=0
      for(let cart of this.carts){
      this.total_price+=(cart.quantity*cart.price_per_unit)
      //console.log(cart);
      }
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
  
  removeFromCart(cartId){
    this.cartService.removeFromCart(cartId).subscribe(res=>{
      let res1=res;
     
      console.log(res);
      alert("product removed from cart");
      this.fetchCart();
      
    },
    err=>{
      console.log("Error while deleting the product :"+err);
    }
    )
  }

  //making the payment and saving orders
  MakePaymentAndSaveOrders(){
    this.cartService.saveOrders(this.carts).subscribe(res=>{
    console.log("Payment is successfull your order is places");
    alert("Your Order is placed");    
    //cleaning the cart
    this.cartService.removeAllFromCart().subscribe(res=>{
      console.log('Cart cleared successfully')
      //redirecting to the order page
      this.router.navigate(['/myorders']);

    },
    err=>{
      console.log("Error cleaning the cart",err);
    }
    );
    },
    err=>{
      console.log("error while making payment and saving the orders :",err);
    }
    )
  }




}
