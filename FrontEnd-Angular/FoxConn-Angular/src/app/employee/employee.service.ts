import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'https://localhost:44316/api/Employee';  

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getEmployee (): Observable<Employee[]> {   
    return this.httpClient.get<Employee[]>(this.apiUrl)      
  }

  find(id:number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.apiUrl + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update(id:number, employee:Employee): Observable<Employee> {
    //return this.httpClient.put<Categoria>(this.apiUrl + '/categorias/' + id , JSON.stringify(categoria), this.httpOptions)
    employee.rule.ruleId= employee.ruleId;
    employee.employeeId=id;
    return this.httpClient.put<Employee>(this.apiUrl +  '/'   + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(Employee: Employee): Observable<Employee> {  
    return this.httpClient.post<Employee>(this.apiUrl, JSON.stringify(Employee), this.httpOptions)
    .pipe(catchError(this.errorHandler))
  }

  delete(id:number){
    return this.httpClient.delete(this.apiUrl + '/' + id, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
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