import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { LandingComponent } from './Components/LandingComponent/LandingComponent';
import { AddTodoComponent } from './Components/TodoDashboard/AddTodoComponent/AddTodoComponent';
import { TodoDashboardComponent } from './Components/TodoDashboard/TodoDashboardComponent/TodoDashboardComponent';
import { ProfileSettingsComponent } from './Components/ProfileSettingsComponent/ProfileSettingsComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
      LandingComponent,
      TodoDashboardComponent,
      AddTodoComponent,
      ProfileSettingsComponent
    ]
})
export class AppComponent
{
  private router: Router;
  private localStorage: LocalStorageService;

  constructor(todoDashboardComponent: TodoDashboardComponent, LandingComponent: LandingComponent, router: Router, localStorage: LocalStorageService)
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
