import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  loginForm: FormGroup;
  loginError: string = "";
  passwordShowIcon = true;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group(
      {
        emailId: ['', [Validators.required, Validators.email]],
        loginPassword: ['', [Validators.required]]
      }
    );
  }

  ngOnInit(): void {
  }

  get emailId() {
    return this.loginForm.get('emailId');
  }
  get loginPassword() {
    return this.loginForm.get('loginPassword');
  }

  onLogin() {
    this.router.navigate(['dashboard']);
  }

}
