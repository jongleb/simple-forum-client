import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Constants} from "../constants";
import {Message} from "../models/message";


@Injectable()
export class MessageService {
    private messagesUrl = 'messages';

    constructor(private http:Http) {
    }

    getMessages():Promise<Message[]> {
        return this.http.get(`${Constants.API}${this.messagesUrl}`)
            .toPromise()
            .then(res=>res.json())
            .catch(this.handleError);
    }

    getMessageById(id:number):Promise<Message> {
        return this.http.get(`${Constants.API}${this.messagesUrl}/${id}`)
            .toPromise()
            .then(res=>res.json())
            .catch(this.handleError);
    }

    sendMessage(msg:Message):Promise<Message> {

        let body = JSON.stringify(msg),
            headers = new Headers({
                'Content-Type': 'application/json'
            }),
            options = new RequestOptions({headers: headers});

        return this.http.post(`${Constants.API}${this.messagesUrl}?access_token=${JSON.parse(localStorage.getItem('currentUser')).id}`, body, options)
            .toPromise()
            .then(res=>res.json())
            .catch(this.handleError);
    }

    updateMessage(id:number, msg:Message):Promise<Message> {
        let body = JSON.stringify(msg),
            headers = new Headers({
                'Content-Type': 'application/json'
            }),
            options = new RequestOptions({headers: headers});

        return this.http.put(`${Constants.API}${this.messagesUrl}/${id}?access_token=${JSON.parse(localStorage.getItem('currentUser')).id}`, body, options)
            .toPromise()
            .then(res=>res.json())
            .catch(this.handleError);
    }

    deleteMessageById(id:number):Promise<any> {
        return this.http.delete(`${Constants.API}${this.messagesUrl}/${id}?access_token=${JSON.parse(localStorage.getItem('currentUser')).id}`)
            .toPromise()
            .then(res=>res.json())
            .catch(this.handleError);
    }

    private handleError(error:any) {
        console.log(error.status);
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
