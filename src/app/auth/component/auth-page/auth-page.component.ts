import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

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
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group(
      {
        userId: ['', [Validators.required, Validators.pattern(new RegExp('^(?!\d+$)(?:[a-zA-Z0-9][a-zA-Z0-9 @&$-_]*)?$'))]],
        loginPassword: ['', [
          Validators.required, 
          Validators.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'))]]
      }
    );
  }

  ngOnInit(): void {
  }

  get userId() {
    return this.loginForm.get('userId');
  }
  get loginPassword() {
    return this.loginForm.get('loginPassword');
  }

  onLogin() {
    this.authService.login(this.userId?.value, this.loginPassword?.value).subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    )
    this.router.navigate(['dashboard', 'home']);
  }

}
