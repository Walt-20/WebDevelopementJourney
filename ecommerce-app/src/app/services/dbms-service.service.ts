import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private databaseHost = "";

  constructor(private http: HttpClient) { }

  submitLogin(userName: string, password: string) {
    const formData = { userName, password };
    return this.http.post(`${this.databaseHost}/api/login`, formData);
  }

  submitRegister(email: string, name: string, userName: string, password: string) {
    const formData = { email, name, userName, password };
    return this.http.post(`${this.databaseHost}/api/register`, formData);
  }
}
