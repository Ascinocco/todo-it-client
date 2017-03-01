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