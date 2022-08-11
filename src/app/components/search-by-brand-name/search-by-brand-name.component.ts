import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServicesService } from 'src/app/services/cart-services.service';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-search-by-brand-name',
  templateUrl: './search-by-brand-name.component.html',
  styleUrls: ['./search-by-brand-name.component.css']
})
export class SearchByBrandNameComponent implements OnInit {
brandName={bname:""};
products:any;
flag:any
  constructor(private route:ActivatedRoute,private cartService:CartServicesService,private productService:ProductServicesService) { }

  ngOnInit( ): void {
    //getting the product id from route
    this.route.params.subscribe(params => {
      this.brandName.bname= params['bname'];      
      //calling the backend api to get the products
      this.productService.getProductsBrandName(this.brandName.bname).subscribe(res=>{
       this.products=res;
       if(this.products.length>0)
         this.flag=false
         else
         this.flag=true
      },
      err=>{
        console.log("Error while getting the products from \n",err);
      }
      ) 
      });
      console.log(this.brandName.bname);
  }

  //method for adding the product into cart
  addToCart(product){
    this.cartService.saveIntoCart(product).subscribe(res=>{
       console.log(res);
       alert("Product added into cart");
    },
    err=>{
       alert("Error while saving the product into the cart")
       console.log(err);
    }
    )
  }

}
