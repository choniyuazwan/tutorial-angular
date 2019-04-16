import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Numpy"},
    {"id":3, "name":"Pandas"},
    {"id":4, "name":"Scikit Learn"},
    {"id":5, "name":"Pytorch"}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(department) {
    this.router.navigate(['/departments', department.id])
  }

}
