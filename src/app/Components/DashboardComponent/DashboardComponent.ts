import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'dashbaord',
    templateUrl: './DashboardComponent.html',
    styleUrls: ['./DashboardComponent.css']
})

export class DashboardComponent 
{

    private localStorage: LocalStorageService;

    constructor(localStorage: LocalStorageService)
    {
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