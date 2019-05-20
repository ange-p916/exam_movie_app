import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder} from '@angular/forms'
import {Validators} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() : void{
    this.profileForm = new FormGroup({
      firstName : new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      'username': new FormControl(this.fb.control['username'],
       [Validators.required]),
       password: new FormControl(this.fb.control['password'], 
       [Validators.required])
    });
  }

  get username(){ return this.profileForm.get('username');}
  get password(){ return this.profileForm.get('password');}

  register(){}

}
