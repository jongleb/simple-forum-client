import {NgModule} from '@angular/core';
import {CommonModule}  from '@angular/common';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule}   from '@angular/forms';

import {MessageListComponent} from './message-list.component';
import {routing} from "./message.routing";
import {MessageService} from "./message.service";
import {MessageFormComponent} from "./message-form.component";
import {MessageItemComponent} from "./message-item.component";
import {MessageCreateComponent} from "./message-create.component";
import {MessageEditComponent} from "./message-edit.component";

@NgModule({
    imports: [CommonModule, HttpModule, FormsModule, routing],
    declarations: [
        MessageListComponent,
        MessageFormComponent,
        MessageItemComponent,
        MessageCreateComponent,
        MessageEditComponent
    ],
    providers: [MessageService]
})
export class MessageModule {
}
