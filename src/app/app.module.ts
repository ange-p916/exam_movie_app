import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { ManageMoviesComponent } from './manage-movies/manage-movies.component';
import { MovieSearchPipe } from './movie-search.pipe';
import { AdminComponent } from './admin/admin.component';
import { AuthguardService } from './services/authguard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppState, rootReducer, MovieState } from './store/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CreateMovieComponent,
    ManageMoviesComponent,
    MovieSearchPipe,
    AdminComponent,
    PageNotFoundComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgReduxModule, NgReduxRouterModule.forRoot()
  ],
  providers: [AuthguardService, MovieService, MovieState],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>, private ngReduxRouter: NgReduxRouter) {
    this.ngRedux.configureStore(rootReducer, {}, []);
  }
}
