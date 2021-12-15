import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appt } from '../appt';
import { Patient } from '../patient';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  appts: appt[]
  pID: number
  fname: string 
  lname: string
  address: string
  DOB: string
  phone: string
  patient: Patient
  idFromLogin : any = localStorage.getItem('localID');

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientsSerive: PatientsService,
  ) { }

  ngOnInit() {

    
    this.patientsSerive.getPatientByID(this.idFromLogin)
      .subscribe(patient => {
      this.appts = patient.appts
      this.fname = patient.fname
      this.lname =  patient.lname
      this.address = patient.address
      this.DOB = patient.DOB
      this.phone = patient.phone
      })
  }


}
