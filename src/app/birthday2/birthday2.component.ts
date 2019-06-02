import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday2',
  templateUrl: './birthday2.component.html',
  template: `
  <p>The hero's birthday is {{ birthday | date:format }}</p>
  <button (click)="toggleFormat()">Toggle Format</button>`,
  styleUrls: ['./birthday2.component.css']
})
export class Birthday2Component implements OnInit {

  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  constructor() { }

  ngOnInit() {
  }

}
