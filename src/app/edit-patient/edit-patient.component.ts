import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  firstname: string
  lastname: string
  address: string
  dateofbirth: string
  email: string
  phone: string
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Succesfully Updated!');
    this.router.navigateByUrl('/patients')
  }
}
