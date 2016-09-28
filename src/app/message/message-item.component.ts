import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MessageService} from "./message.service";
import {Message} from "../models/message";
import {Router} from '@angular/router';

@Component({
    templateUrl: 'src/app/message/message-item.component.html',
    styleUrls: ['src/app/message/message.component.css'],
    selector: 'message-item'
})
export class MessageItemComponent implements OnInit {
    userId:number;

    constructor(private router:Router) {
    }

    @Input() message:Message;
    @Output() onDeleted = new EventEmitter();

    remove(id:number) {
        this.onDeleted.emit(id);
    }

    edit(id:number) {
        this.router.navigate([`/messages/${id}/edit`]);
    }

    ngOnInit() {
        let storeUsr = localStorage.getItem('currentUser');
        if (!storeUsr) {
            this.userId = null;
        } else {
            this.userId = JSON.parse(storeUsr).userId;
        }
    }
}