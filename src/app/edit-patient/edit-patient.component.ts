import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '../patients.service';
import { Patient } from '../patient';
import { appt } from '../appt';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
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
  }


  onSubmit(): void {
    this.patientsSerive.editPatientByID(this.appts, this.pID, this.fname,this.lname,
      this.address,this.DOB, this.phone)
      .subscribe(() => {
        alert("Successfully Updated!");
        this.router.navigateByUrl('/patients');
      })
  }
}
