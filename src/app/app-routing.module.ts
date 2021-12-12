import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { DoctorGuard } from './doctor.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'doctor', component: HomeComponent, canActivate: [DoctorGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'patients', component: PatientComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'patients/:firstname', component: PatientDetailComponent},
  {path: 'edit-patient/:firstname', component: EditPatientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
