import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {Constants} from "../constants";

@Injectable()
export class AuthService {

    public token:string;
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    isLoggedIn:boolean = false;

    redirectUrl:string;

    login(username:string, password:string):Observable<boolean> {
        return this.http.post(`${Constants.API}users/login`,
            JSON.stringify({username: username, password: password}),
            {headers: this.headers})
            .map((response:Response) => {
                if (response.json().id) {
                    localStorage.setItem('currentUser',JSON.stringify(response.json()));
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout():void {
        this.isLoggedIn = false;
    }
}
