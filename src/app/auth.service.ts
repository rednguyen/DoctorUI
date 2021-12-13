
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loggedIn:boolean=false;
  constructor() { }
  login(username:string,password:string){

    localStorage.setItem('localUsername',username);
    localStorage.setItem('localPassword',password);
  }
}