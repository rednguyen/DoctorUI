import { Component, OnInit } from '@angular/core';
import { appt } from '../appt';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-appt-per-patient',
  templateUrl: './appt-per-patient.component.html',
  styleUrls: ['./appt-per-patient.component.css']
})
export class ApptPerPatientComponent implements OnInit {
appts: appt[]
idFromLogin : any = localStorage.getItem('localID');

  constructor(
    private patientService: PatientsService
  ) { }

  ngOnInit() {
    this.patientService.getPatientByID(this.idFromLogin)
    .subscribe(patient => {
    this.appts = patient.appts

    })
  }
  deleteAppt(apptID:number)
  {
    this.patientService.deleteAppointmentbyId(apptID)
    .subscribe(() => {
      alert("Successfully Deleted!");
      window.location.reload();
    })
  }

}
