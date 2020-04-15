import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError, tap, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EditionService {

  constructor(private http: HttpClient) { }

  url:string = 'assets/editions.json';  

  getEditions():Observable<string[]>{
    return this.http.get<string[]>(this.url).pipe(
      tap(obj => console.log('fetched edition data')),
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`); 
    }
    return throwError('Something whent wrong; please try again');
  }

}
