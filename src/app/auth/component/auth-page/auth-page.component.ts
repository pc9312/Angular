import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/dialog/error-dialog/error-dialog.component';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  loginError: string = "";
  passwordShowIcon = true;
  unsubscribeSubject: Subject<boolean> = new Subject();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group(
      {
        userId: ['', [Validators.required, Validators.pattern(new RegExp(/^(?!\d+$)[a-zA-Z0-9@#\$_]*[a-zA-Z0-9@#\$_]*$/))]],
        loginPassword: ['', [
          Validators.required, 
          Validators.pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/))]]
      }
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.unsubscribeSubject.next(true);
    this.unsubscribeSubject.unsubscribe();
  }

  get userId() {
    return this.loginForm.get('userId');
  }
  get loginPassword() {
    return this.loginForm.get('loginPassword');
  }

  onLogin() {
    if(!this.loginForm.valid){
      return;
    }
    this.authService.login(this.userId?.value, this.loginPassword?.value)
    .pipe(takeUntil(this.unsubscribeSubject))
    .subscribe(
      (data) => {
        if(data){
          this.router.navigate(['dashboard', 'home']);
        }
      },
      (error) => {
        const errorMessage = "Incorrect User ID/Password";
        this.showErrorDialog(errorMessage);
      }
    )    
  }

  private showErrorDialog(errorMessage: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

}
