import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { of } from 'rxjs'
import { map, catchError, switchMap, tap } from 'rxjs/operators'

import { Actions, createEffect, ofType } from '@ngrx/effects'

import { login, loginFailure, loginSuccess, logout } from './auth.actions'
import { AuthService } from '../../services/auth.service'
 
@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap(({ email, password }) => this.authService.login({ email, password })),
    map(response => loginSuccess({ token: response })),
    catchError((error: HttpErrorResponse) => {
      console.log(error)

      return of(loginFailure({ error: error.error || error.message })) // TODO: maybe better error extraction
    })
  ))

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess),
    tap(() => {
      this.router.navigate([''])
    })
  ), { dispatch: false })

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout.type),
    tap(() => {
      this.router.navigate(['login'])
    })
  ), { dispatch: false })

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}
}