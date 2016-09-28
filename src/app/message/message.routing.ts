import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MessageListComponent} from "./message-list.component";
import {MessageFormComponent} from "./message-form.component";
import {AuthGuard} from "../services/auth-guard.service";
import {MessageCreateComponent} from "./message-create.component";
import {MessageEditComponent} from "./message-edit.component";

const routes:Routes = [
    {path: 'messages/list', component: MessageListComponent},
    {path: 'messages/create', component: MessageCreateComponent, canActivate: [AuthGuard]},
    {path: 'messages/:id/edit', component: MessageEditComponent, canActivate: [AuthGuard]}
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);
