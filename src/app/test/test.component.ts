import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <input [id]="myId" type="text" value="azwan">
    <input disabled id={{myId}} type="text" value="azwan">
    <input disabled="false" id={{myId}} type="text" value="azwan">
    <input disabled="{{false}}" id={{myId}} type="text" value="azwan">
    <input [disabled]="false" id={{myId}} type="text" value="azwan">
    <input [disabled]="true" id={{myId}} type="text" value="azwan">
    <input [disabled]="isDisabled" id={{myId}} type="text" value="azwan">
    <input bind-disabled="isDisabled" id={{myId}} type="text" value="azwan">
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name =  "Codevolution";
  public myId = "testId";
  public isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

}
