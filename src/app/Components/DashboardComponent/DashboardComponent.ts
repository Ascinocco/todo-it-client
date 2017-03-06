import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/AuthService';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
    selector: 'dashbaord',
    templateUrl: './DashboardComponent.html',
    styleUrls: ['./DashboardComponent.css']
})

export class DashboardComponent 
{
    private localStorage: LocalStorageService;
    private authService: AuthService;
    private router: Router;

    constructor(localStorage: LocalStorageService, authService: AuthService, router: Router)
    {
        this.router = router;
        this.authService = authService;
        this.localStorage = localStorage;
    }

    public getUserFirstName(): string
    {
        let user = this.localStorage.get('user');

        if ("firstName" in user) {
        return user["firstName"];
        }
    }

    public logout(): void
    {
        this.authService.logout()
            .subscribe((res) => {
            this.router.navigate(['landing']);
        });
    }
}