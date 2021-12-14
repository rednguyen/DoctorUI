import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { HttpClient } from '@angular/common/http';
import { appt } from './appt';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(
    private http:HttpClient,
  ) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>('https://localhost:44349/api/patients');
  }

  getPatientByID(pID: number): Observable<Patient>{
    return this.http.get<Patient>(`https://localhost:44349/api/patients/${pID}`);
  }

  getPatientByfname(fname: string): Observable<Patient>{
    return this.http.get<Patient>(`https://localhost:44349/api/patients/${fname}`);
  }

  deletePatientByFirstName(pID: number): Observable<Patient>{
    return this.http.delete<Patient>(`https://localhost:44349/api/patients/${pID}`);
  }

  editPatientByID(appts: appt[],pID: number, fname: string, lname: string, address: string, DOB: string, 
     phone: string): Observable<Patient>{
    
    return this.http.put<Patient>(`https://localhost:44349/api/patients/${pID}`, {
      "appts": appts,
      "pID": pID,
      "fname": fname,
      "lname": lname,
      "address": address,
      "DOB": DOB,
      "phone": phone,
    })
  }

   
}
