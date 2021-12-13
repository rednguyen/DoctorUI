import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class DoctorGuard implements CanActivate {

  constructor(private router: Router) { }
role!:string;

  canActivate():boolean{
    

    return this.checkLogin();
  }

  checkLogin():boolean{
    let userFromLogin : any = localStorage.getItem('localUsername');
    //alert(userFromLogin);
    let passFromLogin: any = localStorage.getItem('localPassword');
    //alert(passFromLogin);
    

    if(userFromLogin=='admin' && passFromLogin =='admin')
    { 
        return true;
    }
    else if (userFromLogin=='user' && passFromLogin =='user'){
  
      return true;

    }
    this.router.navigate(['/login']);
    return false;
  }  

}