import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Models/User';
import { AuthService } from '../../Services/AuthService';

@Component({
  selector: 'login',
  templateUrl: './LoginComponent.html',
  styleUrls: ['./LoginComponent.css']
})

export class LoginComponent
{
  public email: string;
  public password: string;
  public errors: Array<string>;
  public showLogin: boolean;
  private router: Router;
  private authService: AuthService;

  constructor(router: Router, authService: AuthService)
  {
    this.email = "";
    this.password = "";
    this.showLogin = true;
    this.router = router;
    this.authService = authService;
    this.errors = [];
  }

  // this should return a user object
  // not 100% sure how this is going to play out
  // this is my basic stub for now
  public login()
  {
    let user = new User('' ,this.email, this.password);
    user = this.authService.login(user);

    if (user) {
      this.clearLoginForm();
      this.router.navigate(['dashboard']);
    } else {
      this.errors = ['error 1', 'error 2'];
    }
  }

  public clearLoginForm(): void
  {
    this.email = "";
    this.password = "";
    this.showLogin = false;
  }

  public userIsLoggedIn(): boolean
  {
    // if logged logged in 
      // return true
    // else 
      // return false

    return false;
  }
}
