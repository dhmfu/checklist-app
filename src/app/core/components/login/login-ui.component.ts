import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { LoginCredentials } from '../../models/credentials'
import { LoginFormControls } from '../../models/login-form.interface'

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginUiComponent {
  loginForm: FormGroup

  @Output() login = new EventEmitter<LoginCredentials>()

  constructor(private fb: FormBuilder) {
    const groupConfig: LoginFormControls = {
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', Validators.required),
    }

    this.loginForm = this.fb.group(groupConfig)
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Not the best decision, but material components throw errors otherwise
      if (document.activeElement && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }

      this.login.emit(this.loginForm.value)
    }
  }
}
