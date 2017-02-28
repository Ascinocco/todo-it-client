import { Component } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'login',
  templateUrl: './LoginComponent.html',
  styleUrls: ['./LoginComponent.css']
})

export class LoginComponent
{
  public email: string;
  public password: string;
  public showLogin: boolean;

  constructor()
  {
    this.email = "";
    this.password = "";
    this.showLogin = true;
  }

  // this should return a user object
  // not 100% sure how this is going to play out
  // this is my basic stub for now
  public login(): User
  {
    let user = new User(this.email, this.password);
    user.login();
    this.clearLoginForm();

    return user;
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
