import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

// import {throwError as observableThrowError,  Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { IEmployee } from './employee';
// import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = '/assets/data/employees.json'
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server error");
  }
}

// @Injectable()
// export class EmployeeService {
//   private _url: string = "/assets/data/employees.json";
//   constructor(private http:HttpClient) { }

//   getEmployees(): Observable<IEmployee[]>{
//     return this.http.get<IEmployee[]>(this._url)
//                     .pipe(tap(data => alert(JSON.stringify(data))) , catchError(this.errorHandler))
//   }
//   errorHandler(error: HttpErrorResponse){
//     return observableThrowError(error.message || "Server Error");
//   }
// }
