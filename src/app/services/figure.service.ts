import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError, tap, map } from 'rxjs/operators'
import { Figure } from '../models/figure';

@Injectable({
  providedIn: 'root'
})
export class FigureService {

  //url:string = 'assets/aliens.json';  

  url:string = 'http://localhost:3000/api/figures';  
  
  constructor(private http: HttpClient) { }

  // getAliens():Observable<Alien[]>{
  //   return this.http.get<Alien[]>(this.url).pipe(
  //     tap(obj => console.log('fetched data')),&
  //     catchError(this.handleError)
  //   );
  // }

  getFigures():Observable<Figure[]>{
      return this.http.get<Figure[]>(this.url).pipe(
        tap(obj => console.log('fetched collection')),
        catchError(this.handleError)
      );
  }

  addFigure(figure:Figure):Observable<Figure>{
    return this.http.post<Figure>(this.url,figure).pipe(
      tap(obj => console.log('fetched figures')),
      catchError(this.handleError)
    );
  }

  removeFigure(figure:Figure):Observable<any>{
    return this.http.delete(`${this.url}/${figure._id}`).pipe(
      tap(obj => console.log('figure removed')),
      catchError(this.handleError)
    );
  }

  editFigure(figure:Figure):Observable<any>{
    console.log(figure);
    return this.http.put<Figure>(`${this.url}`,figure).pipe(
      tap(obj => console.log('figure updated')),
      catchError(this.handleError)
    );
  }
  getFigureById(id:any):Observable<Figure>{
    return this.http.get<Figure>(`${this.url}/${id}`).pipe(
      tap(obj => console.log('fetched figure by id')),
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
