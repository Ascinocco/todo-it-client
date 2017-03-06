import { User } from '../../Models/User';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../Services/AuthService';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'landing',
  templateUrl: './LandingComponent.html',
  styleUrls: ['./LandingComponent.css']
})

export class LandingComponent
{
  public email: string;
  public firstName: string;
  public lastName: string;
  public password: string;
  public confirmPassword: string;

  public showLogin: boolean;
  public showRegistration: boolean;

  public loginErrors: Array<string>
  public registrationErrors: Array<string>

  private router: Router;
  private authService: AuthService;
  private localStorage: LocalStorageService;

  constructor(localStorage: LocalStorageService, router: Router, authService: AuthService)
  {
    this.initForms();
    this.initErrors();

    this.showLogin = false;
    this.showRegistration = false;

    this.router = router;
    this.authService = authService;
    this.localStorage = localStorage;
  }

  public login(): void
  {
    // clear errors and messages on login click
    this.initErrors();

    let user = new User(this.email, this.password);
    this.authService.login(user)
      .subscribe((res) => {
        if (res.success) {
          this.showLogin = false;
          this.initForms();
          this.router.navigate(['dashboard']);
        } else {
          this.loginErrors.push(res.msg);
        }
    });
  }

  public register(): void
  {
    // reset errors and messages when submitting form
    this.initErrors();

    let user = new User(this.email, this.password, this.firstName, this.lastName);
    this.authService.register(user, this.confirmPassword)
      .subscribe((res) => {
        if (res.success) {
          this.initForms();
          this.router.navigate(['dashboard']);
        } else {
          this.registrationErrors.push(res.msg);        
        }
    });
  }

  public logout(): void
  {
    this.authService.logout()
      .subscribe((res) => {
        this.router.navigate(['landing']);
    });
  }

  public getUserFirstName(): string
  {
    let user = this.localStorage.get('user');

    if ("firstName" in user) {
      return user["firstName"];
    }
  }

 public isUserLoggedIn(): boolean
 {
   if (this.localStorage.get('x-access-token')) {
     return true;
   }
   return false;
 }

  private initForms(): void
  {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
  }

  private initErrors(): void
  {
    this.loginErrors = [];
    this.registrationErrors = [];
  }
}
