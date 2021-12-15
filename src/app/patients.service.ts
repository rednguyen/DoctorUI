import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appt } from './appt';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private exampleAppt : appt

  constructor(
    private http:HttpClient,
  ) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>('https://localhost:44337//api/patients');
  }

  getPatientByID(pID: number): Observable<Patient>{
    return this.http.get<Patient>(`https://localhost:44337//api/patients/${pID}`);
  }

  deletePatientByFirstName(pID: number): Observable<Patient>{
    return this.http.delete<Patient>(`https://localhost:44337//api/patients/${pID}`);
  }

  getPatientByfname(fname: string): Observable<Patient>{
    return this.http.get<Patient>(`https://localhost:44349/api/patients/${fname}`);
  }

  deleteAppointmentbyId(apptID: number): Observable<appt>{
    return this.http.delete<appt>(`https://localhost:44349/api/appts/${apptID}`);
  }
     

  editPatientByID(appts: appt[],pID: number, fname: string, lname: string, address: string, DOB: string, 
     phone: string): Observable<Patient>{
    
    return this.http.put<Patient>(`https://localhost:44337//api/patients/${pID}`, {
      "appts": appts,
      "pID": pID,
      "fname": fname,
      "lname": lname,
      "address": address,
      "DOB": DOB,
      "phone": phone,
    })
  }

  creatApptByPid(pid:number, dateTime:string):Observable<appt>{
    return this.http.post<appt>('https://localhost:44349/api/appts',{
    pID:pid,
    date_time:dateTime});
  }
  
 
}
