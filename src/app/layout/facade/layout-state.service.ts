import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Store } from '@ngrx/store'

import { AppState } from '../../store/app.state'

import { toggleMenu } from '../store/ui.actions'
import { selectMenuVisible } from '../store/ui.selectors'

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService {

  constructor(private store: Store<AppState>) { }

  getMenuVisible(): Observable<boolean> {
    return this.store.select(selectMenuVisible)
  }

  toggleMenu(): void {
    this.store.dispatch(toggleMenu())
  }

}
