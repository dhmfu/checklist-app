import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { Store } from '@ngrx/store'

import { MenuItem } from '../models/menu-item.interface'

import { ChecklistsState, selectAsMenuItems } from '../store/checklists'

@Injectable()
export class SidebarService {

  constructor(private store: Store<ChecklistsState>) { }

  getMenuItems(): Observable<MenuItem[]> {
    return this.store.select(selectAsMenuItems)
  }
}
