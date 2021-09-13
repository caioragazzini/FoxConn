import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { Employee } from '../model/employee';
import { salaryRule } from '../model/salaryRule';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private apiUrl = 'https://localhost:44316/api/Employee/salarioDepartamento';  

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getChart (): Observable<salaryRule[]> {   
    return this.httpClient.get<salaryRule[]>(this.apiUrl)      
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}