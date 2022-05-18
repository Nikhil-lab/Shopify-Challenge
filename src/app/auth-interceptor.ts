import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(){}

    intercept(req:HttpRequest<any>,next:HttpHandler){
        const authRequest= req.clone({
            headers:req.headers.set("Authorization","Bearer " + environment.token),

        })
       return  next.handle(authRequest);

    }
}