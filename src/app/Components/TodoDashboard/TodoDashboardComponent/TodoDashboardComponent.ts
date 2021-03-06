import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../../Services/AuthService';
import { LocalStorageService } from 'angular-2-local-storage';
import { AddTodoComponent } from '../AddTodoComponent/AddTodoComponent';

@Component({
    selector: 'todo-dashboard',
    templateUrl: './TodoDashboardComponent.html',
    styleUrls: ['./TodoDashboardComponent.css'],
})

export class TodoDashboardComponent
{
    private router: Router;
    private authService: AuthService;
    private localStorage: LocalStorageService;
    public addTodoComponent: AddTodoComponent;

    constructor(localStorage: LocalStorageService, authService: AuthService,
                router: Router, addTodoComponent: AddTodoComponent)
    {
        this.router = router;
        this.authService = authService;
        this.localStorage = localStorage;
        this.addTodoComponent = addTodoComponent;
    }

    public getUserFirstName(): string
    {
        return this.authService.getUserFirstName();
    }

    public logout(): void
    {
        this.authService.logout()
            .subscribe((res) => {
            this.router.navigate(['landing']);
        });
    }
}