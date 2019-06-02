import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { UserPageComponent } from './user-page/user-page.component';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';
import { ConfigComponent } from './config/config.component';
import { ConfigService } from './config.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './movie.service';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { Movie } from './entities/movie';
import { ManageMoviesComponent } from './manage-movies/manage-movies.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { Birthday2Component } from './birthday2/birthday2.component';
import { ExponentialstrengthPipe } from './exponentialstrength.pipe';
import { PowerboostcalculatorComponent } from './powerboostcalculator/powerboostcalculator.component';
import { CanWatchMoviesPipe } from './can-watch-movies.pipe';
import { MovieSearchPipe } from './movie-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserPageComponent,
    BrowseMoviesComponent,
    ConfigComponent,
    CreateMovieComponent,
    ManageMoviesComponent,
    DeleteMovieComponent,
    BirthdayComponent,
    Birthday2Component,
    ExponentialstrengthPipe,
    PowerboostcalculatorComponent,
    CanWatchMoviesPipe,
    MovieSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, ConfigService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
