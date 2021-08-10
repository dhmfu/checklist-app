import { Component } from '@angular/core'
import { AuthFacadeService } from '../../facade/auth-facade.service'
import { SignUpCredentials } from '../../models/credentials'

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private auth: AuthFacadeService) {}

  onSignUp(credentials: SignUpCredentials): void {
    this.auth.signUp(credentials)
  }
}
