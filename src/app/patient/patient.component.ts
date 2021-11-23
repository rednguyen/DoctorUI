import { Component, OnInit } from '@angular/core';
import { Patient } from '../types';
import { PatientsService } from '../patients.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[] = [];

  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void {
    this.patientsService.getPatients()
      .subscribe(patients => this.patients = patients)
  }

}
