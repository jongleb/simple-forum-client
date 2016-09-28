import {Component}        from '@angular/core';
import {
    Router,
    NavigationExtras
} from '@angular/router';
import {AuthService}  from '../services/auth.service';
import {Login} from "../models/login";

@Component({
    templateUrl: 'src/app/login/login.component.html'
})
export class LoginComponent {
    loading = false;
    error = '';

    model = new Login();

    constructor(private authService:AuthService, public router:Router) {
    }

    login() {
        this.authService.login('adminer', '12345').subscribe(result => {
            if (result === true) {
                this.router.navigate(['/']);
            } else {
                this.error = 'Username or password is incorrect';
                this.loading = false;
            }
        });
    }

    logout() {
        this.authService.logout();
    }
}
