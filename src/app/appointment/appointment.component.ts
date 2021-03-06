import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientsService } from '../patients.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  patients: Patient[] = [];

  constructor(
    private router: Router,
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void {
    this.patientsService.getPatients()
      .subscribe(patients => this.patients = patients)
  }

  deletePatient(pID: any) {
    this.patientsService.deletePatientBypID(pID)
    .subscribe(() => {
      alert("Successfully Deleted!");
      window.location.reload();
    })

    // this.patientsService.deletePatientByID(pID)
    // .subscribe(() => {
    //   alert("Successfully Deleted!");
    //   window.location.reload();
    // })
  }

}
