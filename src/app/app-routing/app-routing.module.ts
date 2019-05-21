import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from '../register/register.component'

import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import {BrowseMoviesComponent} from '../browse-movies/browse-movies.component';
import { UserPageComponent } from '../user-page/user-page.component';

export const routerConfig : Routes = [
  {path: '', redirectTo: 'home/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
  ]},
  /*{path:'admin',component: AdminComponent, children: [
    {path: 'create-movie', component: CreateMovieComponent},
    {path: 'edit-movie', component: EditMovieComponent},
    {path: 'delete-movie', component: DeleteMovieComponent}
  ]},*/
  {path: 'browse-movies', component: BrowseMoviesComponent}
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
