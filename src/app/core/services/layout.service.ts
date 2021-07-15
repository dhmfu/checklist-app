import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { BreakpointObserver } from '@angular/cdk/layout'

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isSmallScreen(): Observable<boolean> {
    return this.breakpointObserver.observe('(max-width: 700px)').pipe(
      map(state => state.matches)
    )
  }
}
