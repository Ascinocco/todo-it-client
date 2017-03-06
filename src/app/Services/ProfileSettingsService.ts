import 'rxjs/Rx';
import { User } from '../Models/User';
import { Injectable } from '@angular/core';
import { AuthService } from './AuthService';
import { HttpService } from './HttpService';
import { Http, Headers, Response, Request } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class ProfileSettingsService
{
    private http: Http;
    private authService: AuthService;
    private httpService: HttpService;
    private localStorage: LocalStorageService;

    constructor(http: Http, httpService: HttpService, localStorage: LocalStorageService, authService: AuthService)
    {
        this.http = http;
        this.httpService = httpService;
        this.authService = authService;
        this.localStorage = localStorage;
    }

    public update(user: User): any
    {
        const token: string = this.authService.getToken();
        this.httpService.put('http://localhost:3000/user/update', user)
            .map((res) => {
                return res.json();
            });
    }
}