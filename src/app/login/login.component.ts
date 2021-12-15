import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Patient } from '../patient';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  patient: Patient;

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private route: Router,
    private authService: AuthService,
    private patientService: PatientsService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      id: ['',Validators.required],
      phone: ['', Validators.required]
    }
    );
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  id!:string;
phone!:string;

onClickSubmit(data: any){
this.id=data.id;
this.phone=data.phone;
this.authService.login(this.id,this.phone);
if(data.id=='admin'&& data.phone=='admin')
{
  this.route.navigate(['/home']);
}
else{ 
  //get patient from db , check if phone nos match
  const pID = parseInt(this.id);
  this.patientService.getPatientByID(pID)
    .subscribe(patient => {
      this.patient = patient;
    })
localStorage.setItem('phoneFromDB',this.patient.phone);

  this.route.navigate(['/patientHome/{{this.patient.pID}}'])
  }
 
}

}
