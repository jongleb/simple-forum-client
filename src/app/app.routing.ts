import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

export const routes: Routes = [
    { path: '', redirectTo: 'messages/list', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegisterComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
