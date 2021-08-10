import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { Store } from '@ngrx/store'

import { LoginCredentials, SignUpCredentials } from '../models/credentials'

import { login, logout, selectLoggedIn, selectAuthLoading, selectUserName, signUp } from '../store/auth'
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

  isAuthLoading(): Observable<boolean> {
    return this.store.select(selectAuthLoading)
  }

  login(credentials: LoginCredentials): void {
    this.store.dispatch(login(credentials))
  }

  logout(): void {
    this.store.dispatch(logout())
  }

  signUp(credentials: SignUpCredentials): void {
    this.store.dispatch(signUp(credentials))
  }
}
