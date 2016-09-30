import {NgModule}   from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {Provider} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

import {AppComponent} from './app.component.ts';
import {LayoutComponent} from './layout/layout.component';
import {routing} from './app.routing';
import {MessageModule} from "./message/message.module";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";
import {Http, ConnectionBackend, RequestOptions, XHRBackend} from '@angular/http';

import {HttpInterceptor} from './extensions/http-interceptor.service';
import {RegisterComponent} from "./register/register.component";


@NgModule({
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        MessageModule
    ],
    declarations: [
        AppComponent,
        LayoutComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        // {
        //     provide: Http,
        //     useFactory: (connectionBackend:XHRBackend,
        //                  requestOptions:RequestOptions) =>
        //     {
        //         return new HttpInterceptor(connectionBackend, requestOptions);
        //     },
        //     deps: [XHRBackend, RequestOptions]
        // }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}