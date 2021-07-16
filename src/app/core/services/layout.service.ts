import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

import { Store } from '@ngrx/store'

import { selectIsSmallScreen, setScreenSize } from '../store/ui'
import { CoreState } from '../store'

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private isSmallScreen$ = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(map(state => state.matches))

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<CoreState>) {
    this.isSmallScreen$.subscribe((isSmall) => this.store.dispatch(setScreenSize({ isSmall })))
  }

  isSmallScreen(): Observable<boolean> {
    return this.store.select(selectIsSmallScreen)
  }
}
