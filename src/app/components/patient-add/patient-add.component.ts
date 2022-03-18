import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  patientForm!: FormGroup;
  successMessage!: string

  constructor(public formBuilder: FormBuilder, public patientService: PatientService, public router: Router) { }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      patientId: ['', Validators.required],
      patientName: ['', [Validators.required, Validators.minLength(1)]],
      patientSymptom: ['', [Validators.required, Validators.minLength(5)]],
      patientTotalBill: ['', [Validators.required, Validators.min(10000)]],
      patientDoctorName: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  displayPatientInfo() {
    console.log(this.patientForm.value)
    this.patientService.savePatient(this.patientForm.value).subscribe((data: any) => {
      this.successMessage = 'Patient with patient id ' + this.patientForm.value.patientId + ' saved successfully';
      //redirect to patientList component
      this.router.navigate(['patientList']);
    })
  }

}
