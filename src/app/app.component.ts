import { Component } from '@angular/core';
import { LoginComponent } from './LoginComponent/LoginComponent';
import { RegisterComponent } from './RegisterComponent/RegisterComponent';
// import { User } from './Models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginComponent, RegisterComponent]
})
export class AppComponent
{
  public loginComponent: LoginComponent;
  public registerComponent: RegisterComponent;
  // public user: User;

  constructor(LoginComponent: LoginComponent, RegisterComponent: RegisterComponent)
  {
    this.loginComponent = LoginComponent;
    this.registerComponent = RegisterComponent;
  }
}
