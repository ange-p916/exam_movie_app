import { Injectable } from '@angular/core';
import { User } from 'src/User';
import { Role } from 'src/Role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public username: string;

  public isLoggedIn: boolean;

  public users:Array<User> = [
    new User("Angelo", Role.admin),
    new User("Peter", Role.user)    
  ];

  getUsers()
  {
    return this.users;
  }

  constructor() { }

  ngOnInit() {
  }
}
