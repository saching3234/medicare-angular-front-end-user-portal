import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SearchByBrandNameComponent } from './components/search-by-brand-name/search-by-brand-name.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
{path:'' ,component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'register', component:RegistrationComponent},
{path:'userHome',component:UserHomeComponent,children:[
  {path:':cid',component:ProductsComponent},
  {path:'',component:PlaceholderComponent}
]
},
{path:'cart',component:CartComponent},
{path:'myorders',component:MyOrdersComponent},
{path:'userprofile',component:UserProfileComponent},
{path:'userEdit',component:UserEditComponent},
{path:"searchByBrand/:bname",component:SearchByBrandNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
