import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2>
      {{2+2}}
    </h2>
    <h2>
      {{"Welcome " + name}}
    </h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{siteUrl}}</h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name =  "Codevolution";
  public siteUrl = window.location.href;
  greetUser() {
    return "Hello" + this.name;
  }

  constructor() { }

  ngOnInit() {
  }

}
