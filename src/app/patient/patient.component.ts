import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientsService } from '../patients.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[] = [];
 

  constructor(
    private patientsService: PatientsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.patientsService.getPatients()
      .subscribe(patients => this.patients = patients)
  }
  deletePatient(id: any) {
    this.patientsService.deletePatientByFirstName(id)
    .subscribe(() => {
      alert("Successfully Deleted!");
      window.location.reload();
    }),
    alert("Patient still has an appointment, please delete it first!");
    
  }
}
