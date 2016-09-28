import {Component, OnInit, Input} from '@angular/core';
import {MessageService} from "./message.service";
import {Message} from "../models/message";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    template: `<message-form (onSubmited)="onSubmited($event)" [model]="message"></message-form>`
})
export class MessageEditComponent implements OnInit {

    message:Message = new Message(null, null);

    ngOnInit() {
        this.route.params.map(params => params['id'])
            .subscribe((id) => {
                this.messageService.getMessageById(id).then(
                    res=> {
                        this.message = res;
                    }
                )
                    .catch(res=> {
                        this.router.navigate(['/messages/list']);
                    })
            });
    }

    constructor(private messageService:MessageService,
                private router:Router,
                private route:ActivatedRoute) {
    }

    onSubmited() {
        this.messageService.sendMessage(this.message)
            .then(res=> {
                this.router.navigate(['/messages/list']);
            })
            .catch(res=> {
                console.log(res);
            })
    }
}