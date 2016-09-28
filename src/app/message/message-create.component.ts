import {Component, OnInit, Input} from '@angular/core';
import {MessageService} from "./message.service";
import {Message} from "../models/message";
import {Router} from '@angular/router';

@Component({
    template: `<message-form (onSubmited)="onSubmited($event)" [model]="message"></message-form>`
})
export class MessageCreateComponent implements OnInit {

    message:Message = new Message(null, null);

    ngOnInit() {
    }

    constructor(private messageService:MessageService,
                private router:Router) {
    }

    onSubmited() {
        this.messageService.sendMessage(this.message)
            .then(res=> {
                this.router.navigate(['/messages/list']);
            })
    }
}