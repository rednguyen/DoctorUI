import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  newfirstname: string
  lastname: string
  address: string
  dateofbirth: string
  email: string
  phone: string
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientsSerive: PatientsService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const firstname = this.route.snapshot.paramMap.get('firstname');
    this.patientsSerive.editPatientByFirstName(firstname, this.newfirstname,this.lastname,
      this.address,this.dateofbirth,this.email, this.phone)
      .subscribe(() => {
        alert("Successfully Updated!");
        this.router.navigateByUrl('/patients');
      })
  }
}
