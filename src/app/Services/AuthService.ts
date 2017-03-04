import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { User } from '../Models/User';

@Injectable()
export class AuthService
{
    public token: string;
    private http: Http;
    private localStorage: LocalStorageService;

    constructor(http: Http, localStorage: LocalStorageService)
    {
       this.http = http;
       this.localStorage = localStorage;
    }

    public login()
    {
       
    }

    public logout()
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