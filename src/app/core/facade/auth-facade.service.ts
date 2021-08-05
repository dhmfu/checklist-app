import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { Store } from '@ngrx/store'

import { LoginCredentials } from '../models/credentials'

import { login, selectLoginLoading } from '../store/auth'
import { CoreState } from '../store'

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {
  constructor(private store: Store<CoreState>) {}

  isLoginLoading(): Observable<boolean> {
    return this.store.select(selectLoginLoading)
  }

  login(credentials: LoginCredentials): void {
    this.store.dispatch(login(credentials))
  }
}
