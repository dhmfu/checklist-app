import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { switchMap, take, tap } from 'rxjs/operators'

import { Store } from '@ngrx/store'

import { CoreState } from '../store'
import { logout, selectToken } from '../store/auth'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private store: Store<CoreState>) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select(selectToken).pipe(
      take(1),
      switchMap(token => {
        const request = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req

        return next.handle(request).pipe(
          tap({
            error: (error) => {
              if (error instanceof HttpErrorResponse && error.status === 401) {
                this.store.dispatch(logout())
              }
            }
          })
        )
      })
    )
  }
}
