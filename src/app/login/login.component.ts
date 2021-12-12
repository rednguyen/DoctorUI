import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });

  }


  login() {
    console.log(this.loginForm.value);
    this.http.get<any>('https://localhost:44323/api/doctors')
    .subscribe( res => {
      const user = res.find((a:any) =>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });
      if(user){
        console.log(user);
        alert('Login Successful');
        this.loginForm.reset();
        this.router.navigate(['/doctor']);
      } else{
        alert('Login Failed');
      }
      }
    
    )}

}
