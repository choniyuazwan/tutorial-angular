import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log 1</button>
    <button (click)="logMessage(myInput)">Log 2</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name =  "Azwan";
  logMessage(value) {
    console.log(value);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
