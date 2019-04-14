import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {"id":1, "name":"choniyu", "age":21},
      {"id":2, "name":"azwan", "age":21},
      {"id":3, "name":"budi", "age":25},
      {"id":4, "name":"raharjo", "age":30}
    ];
  }
}
