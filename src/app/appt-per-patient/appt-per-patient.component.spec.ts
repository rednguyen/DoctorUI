import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptPerPatientComponent } from './appt-per-patient.component';

describe('ApptPerPatientComponent', () => {
  let component: ApptPerPatientComponent;
  let fixture: ComponentFixture<ApptPerPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApptPerPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptPerPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
