import { User } from '../../Models/User';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../Services/AuthService';
import { ProfileSettingsService } from '../../Services/ProfileSettingsService';

@Component({
    selector: 'profile-settings-component',
    templateUrl: './ProfileSettingsComponent.html',
    styleUrls: ['./ProfileSettings.css']
})

export class ProfileSettingsComponent
{
    public email: string;
    public lastName: string;
    public password: string;
    public firstName: string;
    public newPassword: string;
    public confirmPassword: string;
    public updateErrors: Array<string>;
    public updateMessages: Array<string>;

    private router: Router;
    private authService: AuthService;
    private profileSettingsService: ProfileSettingsService;
    
    constructor(authService: AuthService, profileSettingsService: ProfileSettingsService, router: Router)
    {
        this.router = router;
        this.authService = authService;
        this.profileSettingsService = profileSettingsService;
        this.initProfileForm();
    }

    private initProfileForm(): void
    {
        let user = this.authService.getUser();
        try {
            this.email = user["email"];
            this.lastName = user["lastName"];
            this.password = "";
            this.firstName = user["firstName"];
            this.newPassword = "";
            this.confirmPassword = "";
            this.updateErrors = [];
            this.updateMessages = [];
        } catch (err) {
            console.error('Could not set Profile Form');
            console.error(err);
        }
    }

    public update(): void
    {
        this.updateErrors = []
        this.updateMessages = [];
        let user = new User(this.email, this.password, this.firstName, this.lastName);
        if (this.password && this.confirmPassword && this.newPassword) {
            this.profileSettingsService.update(user, this.confirmPassword, this.newPassword)
                .subscribe((res) => {
                if (res.success) {
                    this.firstName = res.user.firstName;
                    this.lastName = res.user.lastName;
                    this.email = res.user.email;
                    this.password = "";
                    this.newPassword = "";
                    this.confirmPassword = "";
                    this.updateMessages.push(res.msg);
                } else {
                    this.password = "";
                    this.newPassword = "";
                    this.confirmPassword = "";
                    this.updateErrors.push(res.msg);
                }
        });
        } else {
            this.profileSettingsService.update(user)
                .subscribe((res) => {
                    if (res.success) {
                         this.firstName = res.user.firstName;
                        this.lastName = res.user.lastName;
                        this.email = res.user.email;
                        this.password = "";
                        this.newPassword = "";
                        this.confirmPassword = "";
                        this.updateMessages.push(res.msg);
                    } else {       
                        this.password = "";
                        this.newPassword = "";
                        this.confirmPassword = "";
                        this.updateErrors.push(res.msg);
                    }
                });
        }
    }

    public logout(): void
    {
        this.authService.logout()
            .subscribe((res) => {
                this.router.navigate(['landing']);
            });
    }
}