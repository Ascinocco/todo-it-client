import { User } from '../../Models/User';
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

    private authService: AuthService;
    private profileSettingsService: ProfileSettingsService;
    
    constructor(authService: AuthService, profileSettingsService: ProfileSettingsService)
    {
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
        } catch (err) {
            console.error('Could not set Profile Form');
            console.error(err);
        }
    }

    public update(): void
    {
        let user = new User(this.email, this.password, this.firstName, this.lastName);
        if (this.password && this.confirmPassword && this.newPassword) {
            this.profileSettingsService.update(user, this.confirmPassword, this.newPassword)
                .subscribe((res) => {
                if (res.success) {
                // success actions
                } else {
                // failure actions
                }
        });
        } else {
            this.profileSettingsService.update(user)
                .subscribe((res) => {
                    if (res.success) {
                        // success actions
                    } else {
                        // failure actions
                    }
                });
        }
    }
}