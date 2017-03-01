import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { User } from '../Models/User';

@Injectable()
export class AuthService
{
    public token: string;
    private http: Http;

    constructor(http: Http)
    {
        let user = new User('anthony@mail.com'); // should be getting user from 
        // cookie or local storage
        this.token = "myToken1234"
    }

    public login()
    {
        // return user
        return new User('scinoccoAnthony@mail.com');
    }

    public logout()
    {
        // destory local storage etc
        return true
    }
}