import { Component, OnInit } from '@angular/core';
import { Patient } from '../types';
import { fakePatients } from '../fake-data';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[] = [];

  constructor() { }

  ngOnInit(): void {
    this.patients = fakePatients;
  }

}
