import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { HttpClient } from '@angular/common/http';

const productURL2 = "http://localhost:5678/patient"

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(public httpClient: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(productURL2);
  }
}
