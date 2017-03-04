import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { HttpService } from './HttpService';
import { LocalStorageService } from 'angular-2-local-storage';
import { User } from '../Models/User';
import 'rxjs/Rx';

@Injectable()
export class AuthService
{
    public token: string;
    public http: Http;
    private httpService: HttpService;
    private localStorage: LocalStorageService;

    constructor(http: Http, httpService: HttpService, localStorage: LocalStorageService)
    {
        this.http = http;
        this.httpService = httpService;
        this.localStorage = localStorage;
    }

    public login(user: User): any
    {
        this.http.post('http://localhost:3000/auth/login', user)
            .map((res: Response) => res.json())
            .subscribe((res) => {
                console.log('What the fuck?');
                console.log(res);
            });
    }

    public logout(user: User)
    {
        return true;
    }

    public resetPassword(user: User, newPassword: string, confirmPassword: string)
    {

    }

    private storeToken(headers: Headers): void
    {
        const token = headers.get('x-access-token');
        this.localStorage.set('x-access-token', token);
    }

    private destoryToken(headers: Headers): void
    {
        this.localStorage.set('x-access-token', '');
    }
}