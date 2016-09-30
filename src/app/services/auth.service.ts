import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {Constants} from "../constants";
import {User} from "../models/user";
import {Register} from "../models/register";
import {Login} from "../models/login";

@Injectable()
export class AuthService {

    public token:string;
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    isLoggedIn:boolean = false;

    login(login:Login):Observable<boolean> {
        return this.http.post(`${Constants.API}users/login`,
            JSON.stringify(login),
            {headers: this.headers})
            .map((response:Response) => {
                if (response.json().id) {
                    localStorage.setItem('currentUser', JSON.stringify(response.json()));
                    return true;
                } else {
                    return false;
                }
            });
    }

    register(data:Register):Promise<User> {
        return this.http
            .post(
                `${Constants.API}users`,
                JSON.stringify(data),
                {headers: this.headers}
            )
            .toPromise()
            .then(res=>res.json());
    }

    logout():Promise<any> {
        return this.http
            .post(`${Constants.API}users/logout/?access_token=${JSON.parse(localStorage.getItem('currentUser')).id}`,{},{})
            .toPromise();
    }
}
