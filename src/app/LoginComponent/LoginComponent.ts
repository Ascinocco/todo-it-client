import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './LoginComponent.html',
  styleUrls: ['./LoginComponent.css']
})
export class LoginComponent
{
  public email: string;
  public password: string;
  constructor()
  {
    this.email = "";
    this.password = "";
  }
}
