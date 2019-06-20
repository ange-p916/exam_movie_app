import { Component } from '@angular/core';
import { AuthguardService } from './services/authguard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamMovieSite';

  constructor(private auth: AuthguardService){}

  logout()
  {
    this.auth.isLoggedIn = false;
  }

}
