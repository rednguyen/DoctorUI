import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  canActivate(): boolean {
    return this.checkLogin();
  }
  checkLogin():boolean{
    let idFromLogin : any = localStorage.getItem('localID');
    let phoneFromLogin: any = localStorage.getItem('localPhone');
    let phoneFromDB: any = localStorage.getItem('phoneFromDB');

    if(idFromLogin=='admin' && phoneFromLogin =='admin')
    { 
        return true;
    }
    else if(phoneFromDB==phoneFromLogin)
    {
      return true;
            //check if phone name combo exists in database.
      //then route to patientHome with that pID
    }
    else{
      return false;

      alert("Incorrect ID or Password");
    }
  }
}
