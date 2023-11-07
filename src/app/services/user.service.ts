import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:3000/api/users'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  createUser(user: any) {
    return this.http.post(`${this.apiUrl}/users`, user);
  }
}
