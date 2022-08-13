import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Routes, RouterModule } from '@angular/router';
import { ProductsCategoryComponent } from './components/products-category/products-category.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdminPageAddProductComponent } from './components/admin-page-add-product/admin-page-add-product.component';
import { AdminPageDeleteProductComponent } from './components/admin-page-delete-product/admin-page-delete-product.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HelpComponent } from './components/help/help.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes:Routes=[
{path:'about-us', component: AboutUsComponent},
{path:'contact-us', component: ContactUsComponent},
{path:'help', component: HelpComponent},
{path:'admin-page', component: AdminPageComponent},
{path:'admin-page-add-product', component: AdminPageAddProductComponent},
{path:'admin-page-delete-product', component: AdminPageDeleteProductComponent},
{path:'admin-login', component: AdminLoginComponent},
{path:'checkout', component: CheckoutComponent},
{path:'cart-details', component: CartDetailsComponent},
{path:'productses/:id', component: ProductDetailsComponent}, 
{path:'search/:keyword', component: ProductListComponent},
{path:'category/:id', component: ProductListComponent},
{path:'category', component: ProductListComponent},
{path:'productses', component: ProductListComponent},
{path:'', redirectTo: '/productses', pathMatch:'full'},
{path:'**', redirectTo: '/productses', pathMatch:'full'}

];

@NgModule({
  declarations: [
    ProductDetailsComponent,
    AppComponent,
    ProductListComponent,
    SearchComponent,
    ProductsCategoryComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    AdminLoginComponent,
    AdminPageComponent,
    AdminPageAddProductComponent,
    AdminPageDeleteProductComponent,
    AboutUsComponent,
    ContactUsComponent,
    HelpComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
