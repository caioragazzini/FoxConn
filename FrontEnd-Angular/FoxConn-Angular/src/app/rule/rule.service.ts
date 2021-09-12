import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import{Rule} from '../model/rule'

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  private apiUrl = 'https://localhost:44316/api/Rules';  

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getRules (): Observable<Rule[]> {   
    return this.httpClient.get<Rule[]>(this.apiUrl)      
  }
  

  find(id:number): Observable<Rule> {
    return this.httpClient.get<Rule>(this.apiUrl + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update(id:number, rule:Rule): Observable<Rule> {
    
    return this.httpClient.put<Rule>(this.apiUrl +  '/'   + id, JSON.stringify(rule), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(rule: Rule): Observable<Rule> {  
    return this.httpClient.post<Rule>(this.apiUrl, JSON.stringify(rule), this.httpOptions)
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