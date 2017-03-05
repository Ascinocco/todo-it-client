import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class GuardMiddleware implements CanActivate
{
    private router: Router;
    private localStorage: LocalStorageService;

    constructor(router: Router, localStorage: LocalStorageService)
    {
        this.router = router;
        this.localStorage = localStorage;
    }

    /**
     * Determines if a user can use a route 
     * TODO: add actual user check, right now its mockedish
     * 
     * @returns {boolean} 
     * 
     * @memberOf GuardMiddleware
     */
    public canActivate(): boolean
    {
        if (this.localStorage.get('x-access-token')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}