import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class GuardMiddleware implements CanActivate
{
    private router: Router;

    constructor(router: Router)
    {
        this.router = router;
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
        let loggedIn = true;
        if (loggedIn) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}