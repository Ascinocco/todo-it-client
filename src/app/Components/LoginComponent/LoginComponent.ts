import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Models/User';
import { AuthService } from '../../Services/AuthService';
import { LocalStorageService } from 'angular-2-local-storage';

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
  public messages: Array<string>;

  public showLogin: boolean;

  private router: Router;
  private authService: AuthService;
  private localStorage: LocalStorageService;

  constructor(router: Router, authService: AuthService, localStorage: LocalStorageService)
  {
    this.email = "";
    this.password = "";
    this.showLogin = false;
    this.router = router;
    this.errors = [];
    this.messages = [];

    this.authService = authService;
    this.localStorage = localStorage;
  }

  public login(): void
  {
    // clear errors and messages on login click
    this.errors = [];
    this.messages = [];

    let user = new User(this.email, this.password);
    this.authService.login(user)
        .subscribe((res) => {
          if (res.success) {
            this.showLogin = false;
            this.clearLoginForm();
            this.messages.push(res.msg);
            this.router.navigate(['dashboard']);
          } else {
            this.errors.push(res.msg);
          }
        });
  }

  /**
   * Loggs out user. 
   * Doesn't actually need the user object as we will remove the token from
   * the client and server as well as delete the user object stored locally
   * 
   * @memberOf LoginComponent
   */
  public logout(): void
  {
    this.authService.logout()
        .subscribe((res) => {
          if (res.success) {
            this.router.navigate(['landing']);
            this.messages.push(res.msg);
          } else {
            // still move to landing page because local token should be gone
            // whether or not server side worked
            this.router.navigate(['landing']);
            this.errors.push(res.msg);
          }
        });
  }

  public clearLoginForm(): void
  {
    this.email = "";
    this.password = "";
    this.showLogin = false;
  }
  
  /** 
   * Needed for displaying the appropriate navbar links
   * 
   * @returns {boolean} 
   * 
   * @memberOf LoginComponent
   */
  public userIsLoggedIn(): boolean
  {
    if (this.localStorage.get('x-access-token')) {
      return true;
    }

    return false;
  }
}
