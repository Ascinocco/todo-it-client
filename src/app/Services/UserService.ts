import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable()
export class UserService
{
    private hostname: string;

    constructor()
    {
        // needs to be replaced with window.location.host
        // don't have a way to test it right now because I have no server
        // so will come back to this
        this.hostname = "http://localhost/";
    }

    // this is probably going to require more logic 
    // to handle auth and stuff, thats where the guard middleware will come in
    public getUser(): User
    {
        // if user is authenticated
            // get user
        // else 
            // error
        // mocking this for now
        
        let user = new User('anthony@mail.com', 'uierhguiehruigh34894h');
        return user;
    }

    public setUser(user: User): User
    {
        // should update user object on the server
        // mocked for now
        user.setEmail('anthonyscinocco@gmail.com');
        //push to server
        // if update successful
        return user;
    }

    public deleteUser(user: User): boolean
    {
        // delete user from server
        // kill token, session, etc
        // kick user back to login
        return true;
    }

}