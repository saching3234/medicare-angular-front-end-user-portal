import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServicesService } from 'src/app/services/cart-services.service';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  constructor(private  activatedroute:ActivatedRoute,private productService:ProductServicesService,private cartService:CartServicesService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(param=>{
      console.log("Got a param : ",param['cid']);
      //calling the backend api
      this.productService.getProducts(param['cid']).subscribe(res=>{
       this.products=res;
        console.log(this.products);
      },
      err=>{
        console.log("Error while getting the products from \n",err);
      }
      )
    })
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
