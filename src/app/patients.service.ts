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

   
}
