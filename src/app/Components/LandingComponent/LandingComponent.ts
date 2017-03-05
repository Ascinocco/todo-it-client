import { Component } from '@angular/core';

import { LoginComponent } from '../LoginComponent/LoginComponent';
import { RegisterComponent } from '../RegisterComponent/RegisterComponent';

import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'landing',
  templateUrl: './LandingComponent.html',
  styleUrls: ['./LandingComponent.css']
})

export class LandingComponent
{

  public loginComponent: LoginComponent;
  public registerComponent: RegisterComponent;
  private localStorage: LocalStorageService;

  constructor(localStorage: LocalStorageService, loginComponent: LoginComponent, registerComponent: RegisterComponent)
  {
    this.localStorage = localStorage;

    this.loginComponent = loginComponent;
    this.registerComponent = registerComponent;
  }

  public getUserFirstName(): string
  {
    let user = this.localStorage.get('user');

    if ("firstName" in user) {
      return user["firstName"];
    }
  }
}
