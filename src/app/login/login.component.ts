import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthguardService } from '../services/authguard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  @Input() username: string;

  constructor(private fb: FormBuilder,private authservice: AuthguardService, private router: Router){
  }

  ngOnInit() {
    this.loginForm = this.fb.group ({
      username: ['', [Validators.required, Validators.minLength(4)]]
    })
  }
  redirect()
  {
    this.router.navigate(['home']);
  }
  checkUserCredentials(name)
  {
    if(name === 'admin')
    {
      this.authservice.isLoggedIn = true;
    }
  }

  onSubmit()
  {
    this.checkUserCredentials(this.loginForm.controls['username'].value);
    console.log(this.authservice.isLoggedIn);
  }

}
