import { Routes } from '@angular/router';
import { GuardMiddleware } from '../Middleware/GuardMiddleware';
import { LandingComponent } from '../Components/LandingComponent/LandingComponent';
import { TodoDashboardComponent } from '../Components/TodoDashboard/TodoDashboardComponent/TodoDashboardComponent';
import { ProfileSettingsComponent } from '../Components/ProfileSettingsComponent/ProfileSettingsComponent';


export const AppRoutes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'dashboard', component: TodoDashboardComponent, canActivate: [GuardMiddleware] },
    { path: 'settings', component: ProfileSettingsComponent, canActivate: [GuardMiddleware] },
    { path: '**', redirectTo: '/landing'}, // default redirect for incorrect urls
];