import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Message} from "../models/message";

@Component({
    templateUrl: 'src/app/message/message-form.component.html',
    selector: 'message-form'
})
export class MessageFormComponent {
    @Input('model') model:Message;
    @Output() onSubmited = new EventEmitter();

    submit() {
        this.onSubmited.emit();
    }
}