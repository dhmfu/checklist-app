import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { Store } from '@ngrx/store'

import { CoreState } from '../store'
import { toggleMenu, selectMenuVisible, setNavbarHeight, selectNavbarHeight } from '../store/ui'

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService {
  constructor(private store: Store<CoreState>) {}

  getMenuVisible(): Observable<boolean> {
    return this.store.select(selectMenuVisible)
  }

  getNavbarHeight(): Observable<number> {
    return this.store.select(selectNavbarHeight)
  }

  setNavbarHeight(height: number): void {
    this.store.dispatch(setNavbarHeight({ height }))
  }

  toggleMenu(): void {
    this.store.dispatch(toggleMenu())
  }
}
