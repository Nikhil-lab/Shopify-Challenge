import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopifyComponent } from './shopify/shopify.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'shopify'},
  { path: 'shopify', component:ShopifyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
