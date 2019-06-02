import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from '../register/register.component'

import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import {BrowseMoviesComponent} from '../browse-movies/browse-movies.component';
import { UserPageComponent } from '../user-page/user-page.component';
import { ConfigComponent } from '../config/config.component';
import { CreateMovieComponent } from '../create-movie/create-movie.component';
import { ManageMoviesComponent } from '../manage-movies/manage-movies.component';
import { DeleteMovieComponent } from '../delete-movie/delete-movie.component';
import { BirthdayComponent } from '../birthday/birthday.component';
import { Birthday2Component } from '../birthday2/birthday2.component';
import { PowerboostcalculatorComponent } from '../powerboostcalculator/powerboostcalculator.component';

export const routerConfig : Routes = [
  {path: '', redirectTo: 'home/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
  ]},
  //{path: 'manage-movies', component: ManageMoviesComponent, children: [{

  //}]},
  {path: 'create-movie', component: CreateMovieComponent},
  {path: 'delete-movie', component: DeleteMovieComponent},
  /*{path:'admin',component: AdminComponent, children: [
    {path: 'create-movie', component: CreateMovieComponent},
    {path: 'edit-movie', component: EditMovieComponent},
    {path: 'delete-movie', component: DeleteMovieComponent}
  ]},*/
  {path: 'browse-movies', component: BrowseMoviesComponent},
  {path: 'config-test', component: ConfigComponent},
  {path: 'birthday', component: BirthdayComponent},
  {path: 'birthday2', component: Birthday2Component},
  {path: 'powerboostcalculator', component: PowerboostcalculatorComponent}
  //{path: 'user-page', component: UserPageComponent, children: [
    //
  //]}
  
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
