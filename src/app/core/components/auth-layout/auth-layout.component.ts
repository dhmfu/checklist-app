import { Component, ChangeDetectionStrategy } from '@angular/core'
import { combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'

import { AuthFacadeService } from '../../facade/auth-facade.service'

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent {
  showSpinner$ = combineLatest([this.auth.isAuthLoading(), this.auth.isLoggedIn()]).pipe(
    map(([authLoading, isLoggedIn]) => authLoading || isLoggedIn)
  )

  constructor(private auth: AuthFacadeService) {}
}
