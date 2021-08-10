import { Component } from '@angular/core'

import { AuthFacadeService } from '../../facade/auth-facade.service'

import { LoginCredentials } from '../../models/credentials'

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginLoading$ = this.auth.isAuthLoading()

  constructor(private auth: AuthFacadeService) {}

  onLogin(credentials: LoginCredentials): void {
    this.auth.login(credentials)
  }
}
