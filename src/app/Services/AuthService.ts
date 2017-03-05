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
       return this.http.post('http://localhost:3000/auth/login', user)
            .map((res: Response) => {
                let data = res.json();

                this.storeToken(res.headers);
                this.storeUser(data.user);

                return data;
            });
    }

    public logout(): any
    {
        // using http service instead of http here, because http service automatically
        // attaches headers to request
        return this.httpService.post('http://localhost:3000/auth/logout', {})
                .map((res) => {
                    this.destoryToken();
                    this.removeUser();
                    return res.json();
                });
    }

    public register(user: User, confirmPassword: string): any
    {
        return this.http.post('http://localhost:3000/auth/register', { user: user, confirmPassword: confirmPassword })
                .map((res) => {
                    console.log(res);
                    let data = res.json();

                    this.storeToken(res.headers);
                    this.storeUser(data.user)

                    return data;
                });
    }

    /**
     * TODO: this 
     * 
     * @param {User} user 
     * @param {string} newPassword 
     * @param {string} confirmPassword 
     * 
     * @memberOf AuthService
     */
    public resetPassword(user: User, newPassword: string, confirmPassword: string)
    {

    }

    private storeUser(user: User): void
    {
        this.localStorage.set('user', user);
    }

    private removeUser(): void
    {
        this.localStorage.set('user', '');
    }

    private storeToken(headers: Headers): void
    {
        const token = headers.get('x-access-token');
        this.localStorage.set('x-access-token', token);
    }

    private destoryToken(): void
    {
        this.localStorage.set('x-access-token', '');
    }
}