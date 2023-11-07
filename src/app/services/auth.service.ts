import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // Method for user login
  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };

    return this.http.post('/api/auth', credentials).pipe(
      tap(response => {
        console.log('Login successful', response);
      }),
      catchError(error => {
        console.error('Login failed', error);
        throw error; 
      })
    );
  }
}


