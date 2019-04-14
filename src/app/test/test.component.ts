import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <!-- 
    <h2 *ngIf="displayName; else elseBlock">
      Azwan
    </h2>

    <ng-template #elseBlock>
      <h2>Name is hidden</h2>
    <ng-template>
    -->

    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>Azwan</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Name is hidden</h2>
    </ng-template>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public displayName = true;

  constructor() { }

  ngOnInit() {
  }

}
