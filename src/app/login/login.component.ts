import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userForm: FormGroup;
  username: string = '';
  password: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const username = this.userForm.get('username')?.value;
      const password = this.userForm.get('password')?.value;
  
      if (username && password) {
        console.log('Submitting login with username:', username, 'and password:', password);
  
        this.authService.login(username, password).subscribe(
          (response) => {
            // Handle successful login here
            const token = response.token; // Extract the token from the response
            // Store the token in a secure way (e.g., in local storage or a cookie)
            console.log('Login successful. Received token:', token);
          },
          (error) => {
            // Handle login error here
            console.error('Login failed:', error);
          }
        );
      }
    }
  }
}  