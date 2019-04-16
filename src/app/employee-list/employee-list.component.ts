import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `
    <h3>Employee List</h3>
    <ul class="items">
      <li *ngFor="let employee of employees">
        <span class="badge">{{employee.id}}</span> {{employee.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data => this.employees = data);
  }

}
