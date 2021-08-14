import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { SignUpCredentials } from '../../models/credentials'
import { SignUpFormControls } from '../../models/sign-up-form.interface'

import { passwordsMatch, PASSWORD_MISMATCH_ERROR_KEY } from '../../util/passwords-match.validator'

@Component({
  selector: 'app-sign-up-ui',
  templateUrl: './sign-up-ui.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpUiComponent {
  signUpForm: FormGroup

  get showPasswordsError(): boolean {
    return this.signUpForm.controls.confirmPassword.touched && this.signUpForm.getError(PASSWORD_MISMATCH_ERROR_KEY)
  }

  @Output() signUp = new EventEmitter<SignUpCredentials>()

  constructor(private fb: FormBuilder) {
    const groupConfig: SignUpFormControls = {
      name: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', Validators.required),
      confirmPassword: this.fb.control('', Validators.required)
    }

    this.signUpForm = this.fb.group(groupConfig, {
      validators: [passwordsMatch]
    })
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      // Not the best decision, but material components throw errors otherwise
      if (document.activeElement && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }

      const { name, email, password } = this.signUpForm.value

      this.signUp.emit({ name, email, password })
    }
  }
}
