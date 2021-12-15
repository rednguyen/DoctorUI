import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Patient } from '../patient';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-schedule-appt',
  templateUrl: './schedule-appt.component.html',
  styleUrls: ['./schedule-appt.component.css']
})
export class ScheduleApptComponent implements OnInit {
  scheduleForm!: FormGroup;
  patient: Patient;
  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private route: Router,
    private authService: AuthService,
    private patientService: PatientsService
  ) { }

  ngOnInit() {
    this.scheduleForm = this.fb.group({
      dateTime: ['',Validators.required]
    }
    );
  }

  get scheduleFormControl() {
    return this.scheduleForm.controls;
  }

  date!:string;

onClickSubmit(data: any){
this.date=data.dateTime;
let idFromLogin : any = localStorage.getItem('localID');
  this.patientService.creatApptByPid(idFromLogin,this.date)
    .subscribe(()=>{
      alert("Successfully Submitted!");
      this.route.navigateByUrl('/apptPerPatient');
    })
localStorage.setItem('phoneFromDB',this.patient.phone);

  this.route.navigate(['/patientHome/{{this.patient.pID}}'])
  }
 
}


