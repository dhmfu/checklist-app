import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { LoginCredentials } from '../../models/credentials'

// TODO: type-check login-form

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginUiComponent {
  loginForm: FormGroup

  @Output() login = new EventEmitter<LoginCredentials>()

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.login.emit(this.loginForm.value)
    }
  }
}
