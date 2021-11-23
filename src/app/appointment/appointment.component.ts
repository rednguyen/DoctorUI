import { Component, OnInit } from '@angular/core';
import { Patient } from '../types';
import { PatientsService } from '../patients.service';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  patients: Patient[] = [];

  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void {
    this.patientsService.getPatients()
      .subscribe(patients => this.patients = patients)
  }

}
