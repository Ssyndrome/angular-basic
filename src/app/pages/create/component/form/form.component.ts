import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import _ from 'lodash';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    _.map(this.validateForm.controls, control => {
      control.markAsDirty();
      control.updateValueAndValidity();
    });
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      id: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      name: [null, [Validators.required]],
      hobbies: [[]],
      city: [null, Validators.required],
      skills: [[], Validators.required],
    });
  }
}
