import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  isLoading: boolean = true;
  patient: Patient;

  constructor(
    private route: ActivatedRoute,
    private patientsSerive: PatientsService,
  ) { }

  ngOnInit(): void {
    const pID = parseInt(this.route.snapshot.paramMap.get('pID'));
    this.patientsSerive.getPatientByID(pID)
      .subscribe(patient => {
        this.patient = patient;
        this.isLoading = false;
      })
  }

}
