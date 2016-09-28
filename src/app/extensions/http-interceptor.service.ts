import {Http, Headers, Response, ConnectionBackend, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';

export class HttpInterceptor extends Http {

    constructor(backend:ConnectionBackend, defaultOptions:RequestOptions) {
        super(backend, defaultOptions);
    }

    private getToken():string {

        let usr = localStorage.getItem('currentUser');

        if (usr) {
            return `?access_token=${JSON.parse(usr).token}`;
        }

        return null;
    }

    post(url:string, body:any, options:any):Observable<Response> {
        url = `${url}${this.getToken()}`;
        return super.post(url, body, options);
    }
}