import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

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
