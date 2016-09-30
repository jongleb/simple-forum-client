import {Component, OnInit} from '@angular/core';
import {AuthService}  from '../services/auth.service';
import {
    Router,
    NavigationExtras
} from '@angular/router';

@Component({
    selector: 'main-layout',
    templateUrl: 'src/app/layout/layout.component.html',
    styleUrls: ['src/app/layout/layout.component.css']
})
export class LayoutComponent implements OnInit {
    userLogined:boolean;

    constructor(private authService:AuthService, public router:Router) {
    }

    logout() {
        this.authService.logout()
            .then(()=> {
                localStorage.removeItem('currentUser');
                this.userLogined = false;
                this.router.navigate(['/messages/list']);
            })
    }

    ngOnInit() {
        let storeUsr = localStorage.getItem('currentUser');
        this.userLogined = storeUsr !== undefined && storeUsr !== null;
    }
}