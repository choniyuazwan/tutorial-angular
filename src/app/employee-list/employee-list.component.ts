import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [
    {"id":1, "name":"choniyu", "age":21},
    {"id":2, "name":"azwan", "age":21},
    {"id":3, "name":"budi", "age":25},
    {"id":4, "name":"raharjo", "age":30}
  ];
  constructor() { }

  ngOnInit() {
  }

}
