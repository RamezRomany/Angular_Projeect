import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {path:"",component:AllProductsComponent},
  {path:"product",component:AllProductsComponent},
  {path:"detail/:id",component:ProductDetailComponent},
  {path:"cart",component:CartComponent},
  {path:"detail/:id/product",redirectTo:"product",pathMatch:"full"},
  {path:"signin", component: SigninComponent },
  {path:"signup", component: SignupComponent },
  {path:"**",component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
