import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from '../register/register.component'

import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { CreateMovieComponent } from '../create-movie/create-movie.component';
import { ManageMoviesComponent } from '../manage-movies/manage-movies.component';
import { AdminComponent } from '../admin/admin.component';
import { AuthguardService } from '../services/authguard.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

export const routerConfig : Routes = [
  {path: 'home', component: HomeComponent, children: [
    {path: 'manage-movies', component: ManageMoviesComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
  ]},
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthguardService], children: [
      
          {
            path: 'create-movie', component: CreateMovieComponent
          },
          {
            path: 'movie/id', component: MovieDetailComponent
          }
        
    ]
  },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'**', component: PageNotFoundComponent},
  {path:'home', redirectTo: '/home/manage-movies'},
  
  
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routerConfig),
    CommonModule    
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
