import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[] = [];

  constructor(public patientService: PatientService) {

    this.patientService.getPatients().subscribe((data: any) => {
      this.patients = data;
    })

  }

  ngOnInit(): void {
  }

}
