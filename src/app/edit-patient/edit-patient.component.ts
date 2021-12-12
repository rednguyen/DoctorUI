import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '../patients.service';
import { Patient } from '../types';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  firstname: string
  newfirstname: string 
  lastname: string
  address: string
  dateofbirth: string
  email: string
  phone: string
  patient: Patient
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientsSerive: PatientsService,
  ) { }

  ngOnInit(): void {
     this.phone = this.route.snapshot.paramMap.get('phone');
    this.patientsSerive.getPatientByFirstName(this.phone)
      .subscribe(patient => {
      this.patient = patient
      this.firstname = this.patient.firstname
      this.lastname =  this.patient.lastname
      this.address = this.patient.address
      this.dateofbirth = this.patient.dateofbirth
      this.email = this.patient.email
      this.phone = this.patient.phone
      })

  }


  onSubmit(): void {
    this.patientsSerive.editPatientByFirstName(this.firstname,this.lastname,
      this.address,this.dateofbirth,this.email, this.phone)
      .subscribe(() => {
        alert("Successfully Updated!");
        this.router.navigateByUrl('/patients');
      })
  }
}
