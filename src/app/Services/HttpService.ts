/**
 * A wrapper for the angular's http lib that allows me to easily set headers 
 * on requests
 * 
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpService
{
    private http: Http;

    constructor(http: Http)
    {
        this.http = http;
    }

    private createAuthHeader(headers: Headers)
    {
        
    }
}