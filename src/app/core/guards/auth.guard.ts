import { Injectable } from '@angular/core'
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { map, take } from 'rxjs/operators'

import { Store } from '@ngrx/store'

import { CoreState } from '../store'
import { selectToken } from '../store/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private router: Router, private store: Store<CoreState>) {}

  canLoad(): Observable<boolean | UrlTree> {
    return this.isLoggedIn()
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.isLoggedIn()
  }

  private isLoggedIn(): Observable<boolean | UrlTree> {
    return this.store.select(selectToken).pipe(
      take(1),
      map(token => !!token || this.router.parseUrl('login'))
    )
  }
}
