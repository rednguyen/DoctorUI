import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '../patients.service';
import { Patient } from '../patient';
import { appt } from '../appt';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  form: FormGroup;
  submitted=false;
  appts: appt[]
  pID: number
  fname: string 
  lname: string
  address: string
  DOB: string
  phone: string
  patient: Patient
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientsSerive: PatientsService,
    private fromBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('pID'));
    this.pID = parseInt(this.route.snapshot.paramMap.get('pID'));
    
    this.patientsSerive.getPatientByID(this.pID)
      .subscribe(patient => {
      this.appts = patient.appts
      this.fname = patient.fname
      this.lname =  patient.lname
      this.address = patient.address
      this.DOB = patient.DOB
      this.phone = patient.phone
      })
    this.form=this.fromBuilder.group({
      fname: ['',Validators.required],
      lname: ['',Validators.required],
      address: ['',Validators.required],
      DOB:['',Validators.required],
      phone:['',[Validators.required,Validators.pattern("^((\\+1-?)|0)?[0-9]{10}$")]]
      }
      );
  }
  get f(){return this.form.controls;}


  onSubmit(): void {
    this.submitted=true;
    if (this.form.invalid){
      alert("Invalid Input!")
      return;
    }
    this.patientsSerive.editPatientByID(this.appts, this.pID, this.fname,this.lname,
      this.address,this.DOB, this.phone)
      .subscribe(() => {
        alert("Successfully Updated!");
        this.router.navigateByUrl('/patients');
      })
  }
}
