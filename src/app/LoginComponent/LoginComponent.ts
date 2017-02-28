import { Component } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'login',
  templateUrl: './LoginComponent.html',
  styleUrls: ['./LoginComponent.css']
})

export class LoginComponent
{
  public title: string;
  public email: string;
  public password: string;

  constructor()
  {
    this.title = "Login";
    this.email = "";
    this.password = "";
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
