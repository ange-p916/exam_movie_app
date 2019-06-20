import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './movie.service';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { Movie } from './entities/movie';
import { ManageMoviesComponent } from './manage-movies/manage-movies.component';
import { MovieSearchPipe } from './movie-search.pipe';
import { AdminComponent } from './admin/admin.component';
import { AuthguardService } from './authguard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    BrowseMoviesComponent,
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
    HttpClientModule
  ],
  providers: [AuthguardService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
