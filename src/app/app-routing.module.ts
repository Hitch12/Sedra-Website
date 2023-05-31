import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProdactDetailsComponent } from './prodact-details/prodact-details.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { BranchComponent } from './branch/branch.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'prodactDetails/:id/:name' , component:ProdactDetailsComponent},
  {path:'category/:id/:name' , component:CategoryComponent},
  {path:'branch/:id/:name' , component:BranchComponent},
  {path:'contactus' , component:ContactusComponent},
  {path:'about' , component:AboutComponent},
  {path:'all-products/:value' , component:AllProductsComponent},
  {path:'**' , component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
