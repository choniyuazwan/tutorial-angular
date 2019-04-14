import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngFor="let color of colors; index as i">
      <h2>{{i}} {{color}}</h2>
    </div>
    -------------------------
    <div *ngFor="let color of colors; first as f">
      <h2>{{f}} {{color}}</h2>
    </div>
    -------------------------
    <div *ngFor="let color of colors; odd as o">
      <h2>{{o}} {{color}}</h2>
    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public colors = ["red", "blue", "green", "yellow"];

  constructor() { }

  ngOnInit() {
  }

}
