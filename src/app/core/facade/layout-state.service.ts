import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { Store } from '@ngrx/store'

import { CoreState } from '../store'
import { toggleMenu, selectMenuVisible } from '../store/ui'

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService {

  constructor(private store: Store<CoreState>) {}

  getMenuVisible(): Observable<boolean> {
    return this.store.select(selectMenuVisible)
  }

  toggleMenu(): void {
    this.store.dispatch(toggleMenu())
  }

}
