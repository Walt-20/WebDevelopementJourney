import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor() { }

  submitContact(firstName: string, lastName: string, email: string, message: string) {
    console.log(firstName, lastName, email, message);
  }
}
