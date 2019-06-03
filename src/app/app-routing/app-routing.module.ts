import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from '../register/register.component'

import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import {BrowseMoviesComponent} from '../browse-movies/browse-movies.component';
import { UserPageComponent } from '../user-page/user-page.component';
import { CreateMovieComponent } from '../create-movie/create-movie.component';
import { ManageMoviesComponent } from '../manage-movies/manage-movies.component';
import { AdminComponent } from '../admin/admin.component';
import { AuthguardService } from '../authguard.service';

export const routerConfig : Routes = [
  {path: '', redirectTo: 'home/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
  ]},
  {path:'admin',component: AdminComponent, canActivate: [AuthguardService], children: [
    {path: 'browse-movies', component: BrowseMoviesComponent},
    {path: 'create-movie', component: CreateMovieComponent},
    {path: 'manage-movies', component: ManageMoviesComponent}
  ]},
  
  
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
