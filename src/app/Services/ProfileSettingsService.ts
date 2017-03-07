import { User } from '../Models/User';
import { Injectable } from '@angular/core';
import { AuthService } from './AuthService';
import { HttpService } from './HttpService';
import { Http, Headers, Response, Request } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import 'rxjs/Rx';

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

    public update(user: User, confirmPassword?: string, newPassword?: string): any
    {
        if (confirmPassword && newPassword) {
            return this.httpService.post('http://localhost:3000/user/update', { user: user , confirmPassword: confirmPassword, newPassword: newPassword})
                .map((res) => {
                    // save updated user to local storage
                    return res.json();
                });
        } else {
            return this.httpService.post('http://localhost:3000/user/update', { user: user })
                .map((res) => {
                    // save updated user to local storage
                    return res.json();
                });
        }
    }
}