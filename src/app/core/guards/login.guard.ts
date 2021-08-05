import { Injectable } from '@angular/core'
import { CanActivate, Router, UrlTree } from '@angular/router'

import { Observable } from 'rxjs'
import { take, map } from 'rxjs/operators'

import { Store } from '@ngrx/store'

import { CoreState } from '../store'
import { selectLoggedIn } from '../store/auth'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private store: Store<CoreState>) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.store.select(selectLoggedIn).pipe(
      take(1),
      map(token => !token || this.router.parseUrl(''))
    )
  }
}
