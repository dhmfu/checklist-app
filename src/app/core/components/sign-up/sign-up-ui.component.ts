import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { SignUpCredentials } from '../../models/credentials'

// TODO: styles and markup
// TODO: type-check sign-up-form

@Component({
  selector: 'app-sign-up-ui',
  templateUrl: './sign-up-ui.component.html',
  styleUrls: ['./sign-up-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpUiComponent {
  signUpForm: FormGroup

  @Output() signUp = new EventEmitter<SignUpCredentials>()

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.signUp.emit(this.signUpForm.value)
    }
  }
}
