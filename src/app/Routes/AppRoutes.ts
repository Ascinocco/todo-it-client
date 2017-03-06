import { Routes } from '@angular/router';
import { GuardMiddleware } from '../Middleware/GuardMiddleware';
import { LandingComponent } from '../Components/LandingComponent/LandingComponent';
import { DashboardComponent } from '../Components/DashboardComponent/DashboardComponent';


export const AppRoutes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [GuardMiddleware] },
    { path: '**', redirectTo: '/landing'}, // default redirect for incorrect urls
];