import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService // Add userService to the constructor
  ) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      this.userService.createUser(user).subscribe(
        (response: any) => {
          console.log('User registered successfully!', response);
        },
        (error: any) => {
          console.error('Registration failed:', error);
        }
      );
    }
  }
}
