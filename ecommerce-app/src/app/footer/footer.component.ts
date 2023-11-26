import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactFormService } from '../services/contact-form.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private contactService: ContactFormService) { }

  submitContact() {
    this.contactService.submitContact(
      this.contactForm.value.firstName ?? '',
      this.contactForm.value.lastName ?? '',
      this.contactForm.value.email ?? '',
      this.contactForm.value.message ?? ''
    );
  }
}
