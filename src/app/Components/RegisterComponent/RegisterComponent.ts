import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Models/User';
import { AuthService } from '../../Services/AuthService';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'register',
    templateUrl: './RegisterComponent.html',
})

export class RegisterComponent
{
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public confirmPassword: string;

    public showRegistration: boolean;

    public errors: Array<string>;
    public messages: Array<string>;

    private router: Router;
    private authService: AuthService;
    private localStorage: LocalStorageService;

    constructor(router: Router, authService: AuthService, localStorage: LocalStorageService)
    {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";

        this.showRegistration = false;

        this.router = router;
        this.localStorage = localStorage;
        this.authService = authService;
    }

    // this should return a user object
    // not 100% sure how this is going to play out
    // this is my basic stub for now
    public register()
    {
        let user = new User(this.email, this.password, this.firstName, this.lastName);
        this.authService.register(user, this.confirmPassword)
            .subscribe((res) => {
                if (res.success) {
                    this.clearRegistrationForm();
                    this.messages.push(res.msg);
                    this.router.navigate(['dashboard']);
                } else {
                    this.errors.push(res.msg);
                }
            });
    }

    public clearRegistrationForm(): void
    {
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
        this.showRegistration = false;
    }
}