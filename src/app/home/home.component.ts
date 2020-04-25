import { Component, OnInit } from '@angular/core';
import { AuthguardService } from '../services/authguard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: Observable<boolean>;
  constructor(private auth: AuthguardService) {
    this.isLoggedIn = auth.isLoggedIn();}

  ngOnInit() {
    
  }

}
