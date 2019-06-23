import { Component } from '@angular/core';
import { AuthguardService } from './services/authguard.service';
import { MovieState } from './store/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamMovieSite';

  isLoggedIn: Observable<boolean>;

  constructor(private movieState: MovieState, private auth: AuthguardService) {
    this.isLoggedIn = this.auth.isLoggedIn();
  }
}
