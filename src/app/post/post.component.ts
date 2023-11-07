import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      departmentCode: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const formData = this.postForm.value;
      // Handle form submission, e.g., send data to a server or perform an action.
    }
  }

  onDelete() {
  }
  
}
