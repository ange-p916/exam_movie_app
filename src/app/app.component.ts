import { Component } from '@angular/core';
import { AuthguardService } from './services/authguard.service';
import { MovieState } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamMovieSite';

  constructor(private movieState: MovieState, private auth: AuthguardService){}

  logout()
  {
    this.movieState.isLoggedIn = false;
    this.auth.isLoggedIn = false;
  }

}
