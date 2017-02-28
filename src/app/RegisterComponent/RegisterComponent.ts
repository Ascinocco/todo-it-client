import { Component } from '@angular/core';
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

    constructor()
    {
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
        this.showRegistration = false;
    }

    // this should return a user object
    // not 100% sure how this is going to play out
    // this is my basic stub for now
    public register(): User
    {
        // post server
        // server return new user
        this.clearRegistrationForm();
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