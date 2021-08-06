import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { switchMap, take } from 'rxjs/operators'

import { Store } from '@ngrx/store'

import { CoreState } from '../store'
import { selectToken } from '../store/auth'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private store: Store<CoreState>) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select(selectToken).pipe(
      take(1),
      switchMap(token => {
        const request = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req

        return next.handle(request)
      })
    )
  }
}
