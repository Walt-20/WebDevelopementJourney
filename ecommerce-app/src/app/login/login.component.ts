import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../services/dbms-service.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  serverRes: string = '';

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private dbmsService: DatabaseService) { }

  submitLogin() {
    this.dbmsService.submitLogin(
      this.loginForm.value.userName ?? '',
      this.loginForm.value.password ?? ''
    ).subscribe(
      res => {
        console.log('Response from server: ', res);
        this.serverRes = JSON.stringify(res);
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
