import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(id:string,phone:string){

    localStorage.setItem('localID',id);
    localStorage.setItem('localPhone',phone);
  }
}
