import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './models/department.model';
import { Employee } from './models/Employee.model';
import { ResponseBase } from './models/responsebase.model';
import { AddorUpdateDepartment } from './models/addorupdatedepartment.model';
import { AddOrUpdateEmployee } from './models/AddOrUpdateEmployee.model';

let httpOptions = {
  headers: new HttpHeaders({'content-Type':'application/json'}),
} 

@Injectable({ 
  providedIn: 'root'
})
export class SharedService {
 readonly APIUrl="https://localhost:7112/api/";
 
  constructor(private http:HttpClient) { } 

  getDepartmentlist():Observable<Department[]>{
    return this.http.get<Department[]>(this.APIUrl+'Department/Getall');
  }

  addDepartment(val:AddorUpdateDepartment):Observable<ResponseBase>{
    return this.http.post<ResponseBase>(`${this.APIUrl}Department/Create`,val, httpOptions);
  }

  GetIdDepartment(id:number): Observable<Department>{
    return this.http.get<Department>(`${this.APIUrl}Department/${id}`);
  }

  UpdateDepartment(val:AddorUpdateDepartment, id: number):Observable<ResponseBase>{
    return this.http.put<ResponseBase>(`${this.APIUrl}Department/Update/${id}`, val, httpOptions);
  }

  DeleteDepartment(id:number): Observable<ResponseBase>{
    return this.http.delete<ResponseBase>(`${this.APIUrl}Department/Delete/${id}`);
  }

  getEmployeelist():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.APIUrl}Employee/GetallEmployees`);

  }
  GetIdEmployee(id:number): Observable<Employee>{
    return this.http.get<Employee>(`${this.APIUrl}Employee/Getbyid/${id}`);
  }

  addEmployee(val: AddOrUpdateEmployee):Observable<ResponseBase>{
    return this.http.post<ResponseBase>(`${this.APIUrl}Employee/Create`,val,httpOptions);
  }

  UpdateEmployee(val: AddOrUpdateEmployee, id:number):Observable<ResponseBase>{
    return this.http.put<ResponseBase>(`${this.APIUrl}Employee/Update/${id}`,val,httpOptions);
  }

  DeleteEmployee(id:number): Observable<ResponseBase>{
    return this.http.delete<ResponseBase>(`${this.APIUrl}Employee/Delete/${id}`);
  }
}