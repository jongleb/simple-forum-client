import {Component}        from '@angular/core';
import {
    Router,
    NavigationExtras
} from '@angular/router';
import {AuthService}  from '../services/auth.service';
import {Register} from "../models/register";


@Component({
    templateUrl: 'src/app/register/register.component.html'
})
export class RegisterComponent {
    model = new Register(null, null, null);

    constructor(private authService:AuthService, public router:Router) {
    }

    register() {
        this.authService.register(this.model)
            .then(res=> {
                this.router.navigate(['/messages/list']);
            });
    }

}
