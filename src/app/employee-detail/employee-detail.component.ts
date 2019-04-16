import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <ul class="items">
      <li *ngFor="let employee of employees">
        <span class="badge">{{employee.id}}</span> {{employee.name}} - {{employee.age}}
      </li>
    </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data => this.employees = data);    
  }

}
