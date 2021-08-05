import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { Store } from '@ngrx/store'

import { LoginCredentials } from '../models/credentials'

import { login, logout, selectLoggedIn, selectLoginLoading, selectUserName } from '../store/auth'
import { CoreState } from '../store'

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {
  constructor(private store: Store<CoreState>) {}

  getUserName(): Observable<string> {
    return this.store.select(selectUserName)
  }

  isLoggedIn(): Observable<boolean> {
    return this.store.select(selectLoggedIn)
  }

  isLoginLoading(): Observable<boolean> {
    return this.store.select(selectLoginLoading)
  }

  login(credentials: LoginCredentials): void {
    this.store.dispatch(login(credentials))
  }

  logout(): void {
    this.store.dispatch(logout())
  }
}
