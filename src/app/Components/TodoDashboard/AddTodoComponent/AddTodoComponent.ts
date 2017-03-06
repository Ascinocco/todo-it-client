import { Component } from '@angular/core';
import { AuthService } from '../../../Services/AuthService';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'add-todo-component',
    templateUrl: './AddTodoComponent.html',
    styleUrls: ['./AddTodoComponent.css']
})

export class AddTodoComponent
{
    private authService: AuthService;
    private localStorage: LocalStorageService;

    constructor(authService: AuthService, localStorage: LocalStorageService)
    {
        this.authService = authService;
        this.localStorage = localStorage;
    }

    public addTodo(): void
    {

    }
}