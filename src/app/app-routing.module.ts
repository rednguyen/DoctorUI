import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'patients', component: PatientComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'patients/:pID', component: PatientDetailComponent},
  {path: 'edit-patient/:pID', component: EditPatientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
