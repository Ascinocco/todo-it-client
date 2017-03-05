import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { LoginComponent } from '../LoginComponent/LoginComponent';

@Component({
    selector: 'dashbaord',
    templateUrl: './DashboardComponent.html',
    styleUrls: ['./DashboardComponent.css']
})

export class DashboardComponent 
{
    public loginComponent: LoginComponent;
    private localStorage: LocalStorageService;

    constructor(localStorage: LocalStorageService, loginComponent: LoginComponent)
    {
        this.loginComponent = loginComponent;
        this.localStorage = localStorage;
    }

    public getUserFirstName(): string
    {
        let user = this.localStorage.get('user');

        if ("firstName" in user) {
        return user["firstName"];
        }
    }
}