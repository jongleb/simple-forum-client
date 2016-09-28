import {Component, OnInit} from '@angular/core';
import {MessageService} from "./message.service";
import {Message} from "../models/message";

@Component({
    templateUrl: 'src/app/message/message-list.component.html',
    styleUrls: ['src/app/message/message.component.css']
})
export class MessageListComponent implements OnInit {
    messages:Message[];
    loading:boolean = false;

    constructor(private messageService:MessageService) {

    }

    onDeleted(id:number) {
        this.messageService.deleteMessageById(id)
            .then(res => {
                    if (res.count === 1) {
                        this.getMessages();
                    }
                }
            );
    }

    private getMessages() {
        this.loading = true;
        this.messageService.getMessages()
            .then(
                messages => {
                    this.messages = messages;
                    this.loading = false
                }
            );
    }

    ngOnInit() {
        this.getMessages();
    }
}