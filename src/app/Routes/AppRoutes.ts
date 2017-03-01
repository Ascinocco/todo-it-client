import { Routes } from '@angular/router';
import { GuardMiddleware } from '../Middleware/GuardMiddleware';

import { LoginComponent } from '../Components/LoginComponent/LoginComponent';
import { RegisterComponent } from '../Components/RegisterComponent/RegisterComponent';
import { DashboardComponent } from '../Components/DashboardComponent/DashboardComponent';
import { LandingComponent } from '../Components/LandingComponent/LandingComponent';


export const AppRoutes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [GuardMiddleware] },
    // default redirect for incorrect urls
    { path: '**', redirectTo: '/landing'},
];