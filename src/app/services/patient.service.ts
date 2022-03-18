import { Injectable } from '@angular/core';
import { Observable, throwError, catchError, retry } from 'rxjs';
import { Patient } from '../models/patient';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const patientURL = "http://localhost:5678/patient"

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public httpClient: HttpClient) { }

  //Getting all the patients
  getPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(patientURL)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  //Getting a single patient
  getPatient(patientId: number): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${patientURL}/${patientId}`)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  //Deleting a single patient
  deletePatient(patientId: number): Observable<Patient[]> {
    return this.httpClient.delete<Patient[]>(`${patientURL}/${patientId}`)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  //Saving a single patient
  savePatient(patient: Patient): Observable<Patient[]> {
    return this.httpClient.post<Patient[]>(patientURL, patient, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  //Edit/Update a single patient
  updatePatient(patientId: number, patient: Patient): Observable<Patient> {
    return this.httpClient.put<Patient>(`${patientURL}/${patientId}`, patient, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  //Error Handler
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `REVError Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
