import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from 'angular-2-local-storage';

import { LoginComponent } from './Components/LoginComponent/LoginComponent';
import { RegisterComponent } from './Components/RegisterComponent/RegisterComponent';
import { DashboardComponent } from './Components/DashboardComponent/DashboardComponent';
import { LandingComponent } from './Components/LandingComponent/LandingComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginComponent, RegisterComponent, DashboardComponent, LandingComponent]
})
export class AppComponent
{
  public loginComponent: LoginComponent;
  public registerComponent: RegisterComponent;
  public dashboardComponent: DashboardComponent;
  public landingComponent: LandingComponent;
  public router: Router;
  public localStorage: LocalStorageService;

  constructor(LoginComponent: LoginComponent, RegisterComponent: RegisterComponent,
              DashboardComponent: DashboardComponent, LandingComponent: LandingComponent,
              router: Router, localStorage: LocalStorageService)
  {
    this.loginComponent = LoginComponent;
    this.registerComponent = RegisterComponent;
    this.dashboardComponent = DashboardComponent;
    this.landingComponent = LandingComponent;
    this.router = router;
    this.localStorage = localStorage;
    this.router.navigate(['landing'])
  }
}
