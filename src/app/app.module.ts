import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserServicesService } from './services/user-services.service';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserHomeHeaderComponent } from './components/user-home-header/user-home-header.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { CategoryServicesService } from './services/category-services.service';
import { CartComponent } from './components/cart/cart.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { SearchByBrandNameComponent } from './components/search-by-brand-name/search-by-brand-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RegistrationComponent,
    UserHomeComponent,
    UserHomeHeaderComponent,
    HomeHeaderComponent,
    CartComponent,
    MyOrdersComponent,
    UserProfileComponent,
    CategoryComponent,
    ProductsComponent,
    PlaceholderComponent,
    PaymentSuccessComponent,
    UserEditComponent,
    SearchByBrandNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [UserServicesService,CategoryServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
