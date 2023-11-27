import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private serverUrl = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  submitContact(firstName: string, lastName: string, email: string, message: string) {
    const formData = { firstName, lastName, email, message };
    return this.http.post(`${this.serverUrl}/api/contact`, formData);
  }
}
