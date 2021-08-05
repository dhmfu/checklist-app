import { Component } from '@angular/core'

import { AuthFacadeService } from '../../facade/auth-facade.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  userName$ = this.authFacade.getUserName()

  constructor(private authFacade: AuthFacadeService){}

  onLogout(): void {
    this.authFacade.logout()
  }
}
