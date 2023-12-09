import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private databaseHost = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  submitLogin(userName: string, password: string) {
    const formData = { userName, password };
    return this.http.post(`${this.databaseHost}/users/login`, formData);
  }

  submitRegister(email: string, name: string, userName: string, password: string) {
    console.log(userName);
    const formData = { email, name, userName, password };
    return this.http.post(`${this.databaseHost}/users/register`, formData);
  }
}
