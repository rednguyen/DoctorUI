import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
//import { CustomvalidationService } from '../services/customvalidation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
loginForm: FormGroup;
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    // private userRoles: User,
    private fb: FormBuilder,
    private route: Router,
    private loginService: AuthService,
    private http: HttpClient

  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['',Validators.required],
      password: ['', Validators.required]
    }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

username!:string;
password!:string;
public users: User[]=[
  new User('admin','admin','admin'),
  new User('user','user','user')
];
  onClickSubmit(data: any){
    this.submitted=true;
this.username=data.email;
this.password=data.password;
var getUserRole=this.users;
var currentUser=getUserRole.find(x=>x.username==data.email);
this.loginService.login(this.username,this.password);
if(currentUser?.role=='admin')
{
  this.route.navigate(['/successful']);

}
else{
  this.route.navigate(['/doctor']);
}
//let users: any = localStorage.setItem('admin','user');

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
        this.route.navigate(['/doctor']);
      } else{
        alert('Login Failed');
      }
      }
    
    )}

}
