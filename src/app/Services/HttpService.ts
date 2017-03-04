/**
 * A wrapper for the angular's http lib that allows me to easily set headers 
 * on requests
 * 
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class HttpService
{
    private http: Http;
    private localStorage: LocalStorageService;

    constructor(http: Http, localStorage: LocalStorageService)
    {
        this.http = http;
        this.localStorage = localStorage;
    }

    private createAuthHeader(headers: Headers): void
    {
        const token = this.localStorage.get('x-access-token').toString();
        headers.append('x-access-token', token);
    }

    public get(url: string): any
    {
        let headers = new Headers();
        this.createAuthHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    public post(url: string, data: any): any
    {
        let headers = new Headers();
        this.createAuthHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }
    
    public put(url: string, data: any): any
    {
        let headers = new Headers();
        this.createAuthHeader(headers);
        this.http.put(url, data, {
            headers: headers
        });
    }

    public patch(url: string, data: any): any
    {
        let headers = new Headers();
        this.createAuthHeader(headers);
        this.http.patch(url, data, {
            headers: headers
        });
    }

    public delete(url: string): any
    {
        let headers = new Headers();
        this.createAuthHeader(headers);
        this.http.delete(url, {
            headers: headers
        });
    }
    
}