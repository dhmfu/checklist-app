import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { SignUpCredentials } from '../../models/credentials'

// TODO: type-check sign-up-form
// TODO: confirmPassword control

@Component({
  selector: 'app-sign-up-ui',
  templateUrl: './sign-up-ui.component.html',
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
      // Not the best decision, but material components throw errors otherwise
      if (document.activeElement && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }

      this.signUp.emit(this.signUpForm.value)
    }
  }
}
