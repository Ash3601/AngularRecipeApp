import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '../../../../node_modules/@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
    this.router.navigate(['/recipes']);
  }
  onLogout() {
    this.authService.logout();
  }
}
