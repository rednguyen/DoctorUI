import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(
    private http:HttpClient,
  ) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>('/api/Patients');
  }

  getPatientByFirstName(firstname: string): Observable<Patient>{
    return this.http.get<Patient>(`api/Patients/${firstname}`);
  }

  deletePatientByFirstName(firstname: string): Observable<Patient>{
    return this.http.delete<Patient>(`api/Patients/${firstname}`);
  }

  editPatientByFirstName(firstname: string, newfirstname: string, lastname: string, address: string, dateofbirth: string, 
    email:string, phone: string): Observable<Patient>{
    return this.http.put<Patient>(`api/Patients/${firstname}`, {
      "firstname": newfirstname,
      "lastname": lastname,
      "address": address,
      "dateofbirth": dateofbirth,
      "email": email,
      "phone": phone,
    })
  }

   
}
