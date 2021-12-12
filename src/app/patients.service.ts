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
    return this.http.get<Patient[]>('https://localhost:44323/api/Patients');
  }

  getPatientByFirstName(phone: string): Observable<Patient>{
    return this.http.get<Patient>(`https://localhost:44323/api/Patients/${phone}`);
  }

  deletePatientByFirstName(phone: string): Observable<Patient>{
    return this.http.delete<Patient>(`https://localhost:44323/api/Patients/${phone}`);
  }

  editPatientByFirstName(firstname: string, lastname: string, address: string, dateofbirth: string, 
    email:string, phone: string): Observable<Patient>{
    return this.http.put<Patient>(`https://localhost:44323/api/Patients/${phone}`, {
      "firstname": firstname,
      "lastname": lastname,
      "address": address,
      "dateofbirth": dateofbirth,
      "email": email,
      "phone": phone,
    })
  }

   
}
