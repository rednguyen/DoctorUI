import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { LoginComponent } from './login/login.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ApptPerPatientComponent } from './appt-per-patient/appt-per-patient.component';
import { ScheduleApptComponent } from './schedule-appt/schedule-appt.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PatientComponent,
    AppointmentComponent,
    PatientDetailComponent,
    EditPatientComponent,
    LoginComponent,
    PatientHomeComponent,
    ApptPerPatientComponent,
    ScheduleApptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
