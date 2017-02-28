import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User';

@Component({
    selector: 'register',
    templateUrl: './RegisterComponent.html',
})

export class RegisterComponent
{
    public email: string;
    public password: string;
    public confirmPassword: string;
    public showRegistration: boolean;
    private router: Router;

    constructor(router: Router)
    {
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
        this.showRegistration = false;
        this.router = router;
    }

    // this should return a user object
    // not 100% sure how this is going to play out
    // this is my basic stub for now
    public register()
    {
        // post server
        // server return new user
        console.log(this.email);
        console.log(this.password);
        console.log(this.confirmPassword);
        this.clearRegistrationForm();
        this.router.navigate(['dashboard']);
        return new User();
    }

    public clearRegistrationForm(): void
    {
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
        this.showRegistration = false;
    }
}