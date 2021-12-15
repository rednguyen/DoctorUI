import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { ApptPerPatientComponent } from './appt-per-patient/appt-per-patient.component';
import { ScheduleApptComponent } from './schedule-appt/schedule-appt.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent,canActivate:[AuthenticationGuard]},
  {path: 'patients', component: PatientComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'patients/:pID', component: PatientDetailComponent},
  {path: 'edit-patient/:pID', component: EditPatientComponent},
  {path: 'patientHome/:pID', component: PatientHomeComponent,canActivate:[AuthenticationGuard]},
  {path: 'apptPerPatient', component: ApptPerPatientComponent},
  {path: 'schedule', component: ScheduleApptComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
