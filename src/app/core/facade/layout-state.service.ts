import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { MatDrawerMode } from '@angular/material/sidenav'

import { Store } from '@ngrx/store'

import { CoreState } from '../store'
import { toggleMenu, selectMenuVisible, setNavbarHeight, selectNavbarHeight } from '../store/ui'

import { LayoutService } from '../services/layout.service'

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService {
  constructor(private store: Store<CoreState>, private layoutService: LayoutService) {}

  getMenuVisible(): Observable<boolean> {
    return this.store.select(selectMenuVisible)
  }

  getNavbarHeight(): Observable<number> {
    return this.store.select(selectNavbarHeight)
  }

  resolveModeForSidenav(): Observable<MatDrawerMode> {
    return this.layoutService.isSmallScreen().pipe(
      map(smallScreen => smallScreen ? 'over' : 'side')
    )
  }

  setNavbarHeight(height: number): void {
    this.store.dispatch(setNavbarHeight({ height }))
  }

  toggleMenu(): void {
    this.store.dispatch(toggleMenu())
  }
}
