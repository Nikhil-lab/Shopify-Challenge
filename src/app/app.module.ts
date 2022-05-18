import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiService } from './api/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShopifyComponent } from './shopify/shopify.component';
import { AuthInterceptor } from './auth-interceptor';
import { AngularMaterialModule } from './angular-material.module';






@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,
    ShopifyComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService,
            { provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi: true}],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
