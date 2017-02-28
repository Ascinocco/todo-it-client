import { Component } from '@angular/core';
import { LoginComponent } from './LoginComponent/LoginComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginComponent]
})
export class AppComponent
{
  public loginComponent: LoginComponent;

  constructor(LoginComponent: LoginComponent)
  {
    this.loginComponent = LoginComponent;
  }
}
