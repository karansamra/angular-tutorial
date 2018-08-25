import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IEmployee} from "./employee";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";
  constructor( private _http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>(this._url);
  }
}
