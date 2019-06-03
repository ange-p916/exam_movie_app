import { Component, OnInit } from '@angular/core';
import { AuthguardService } from '../authguard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthguardService) { }

  ngOnInit() {
  }

}
