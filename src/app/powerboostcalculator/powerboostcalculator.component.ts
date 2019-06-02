import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-powerboostcalculator',
  templateUrl: './powerboostcalculator.component.html',
  template: `
  <h2>Power Boost Calculator</h2>
  <div>Normal power: <input [(ngModel)]="power"></div>
  <div>Boost factor: <input [(ngModel)]="factor"></div>
  <p>
    Super Hero Power: {{power | exponentialstrength: factor}}
  </p>`,
  styleUrls: ['./powerboostcalculator.component.css']
})
export class PowerboostcalculatorComponent implements OnInit {

  power = 5;
  factor = 1;
  constructor() { }

  ngOnInit() {
  }

}
