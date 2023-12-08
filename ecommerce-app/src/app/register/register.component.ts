import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../services/dbms-service.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  serverRes: string = '';

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private dbmsService: DatabaseService) { }

  submitRegister() {
    this.dbmsService.submitRegister(
      this.registerForm.value.email ?? '',
      this.registerForm.value.name ?? '',
      this.registerForm.value.userName ?? '',
      this.registerForm.value.password ?? ''
    ).subscribe(
      res => {
        console.log('Response from server: ', res);
        this.serverRes = JSON.stringify(res);
    });
  }
}
