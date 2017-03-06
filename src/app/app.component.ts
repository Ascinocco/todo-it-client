import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { LandingComponent } from './Components/LandingComponent/LandingComponent';
import { DashboardComponent } from './Components/DashboardComponent/DashboardComponent';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DashboardComponent, LandingComponent]
})
export class AppComponent
{
  private router: Router;
  private localStorage: LocalStorageService;

  constructor(DashboardComponent: DashboardComponent, LandingComponent: LandingComponent, router: Router, localStorage: LocalStorageService)
  {
    this.router = router;
    this.localStorage = localStorage;
    this.goHome();
  }

  private goHome(): void
  {
    if (this.localStorage.get('x-access-token')) {
      this.router.navigate(['dashboard'])
    } else {
      this.router.navigate(['landing'])
    }
  }
}
