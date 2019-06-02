import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  template: `<h2>POWER BOOSTER</h2>  <p> SUPOWER POWER BOOST:  {{2 | exponentialstrength: 10 }}</p>`,
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  constructor() { }

  ngOnInit() {
  }

}
