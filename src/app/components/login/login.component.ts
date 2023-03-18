import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    emailAddress: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  onSubmit(): void {
    localStorage.setItem("emailAddress", this.loginForm.value.emailAddress!);
    this.route.navigate(["products"]);
  }
}
