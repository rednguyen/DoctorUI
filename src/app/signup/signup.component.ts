import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

public signupform !: FormGroup;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
     email: [''],
     password: ['']

    });
  }

  signUp(){ 
  this.http.post<any>('https://localhost:44323/api/doctors', this.signupform.value).subscribe(data => {
    console.log(data);
    alert("Signup Successful");
    this.signupform.reset();
    this.router.navigate(['/login']);
  }, err => {
    console.log(err);
    alert("Signup Failed");
  }
  )}



}
