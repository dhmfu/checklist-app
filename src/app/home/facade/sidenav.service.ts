import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { filter, map, take } from 'rxjs/operators'

import { MatDrawerMode } from '@angular/material/sidenav'

import { Store } from '@ngrx/store'

import { LayoutService } from '../../core/services/layout.service'

import { toggleMenu } from '../../core/store/ui'

import { MenuItem } from '../models/menu-item.interface'

import { selectAsMenuItems } from '../store/checklists'

@Injectable()
export class SidenavService {

  constructor(private store: Store, private layoutService: LayoutService) { }

  getMenuItems(): Observable<MenuItem[]> {
    return this.store.select(selectAsMenuItems)
  }

  resolveMode(): Observable<MatDrawerMode> {
    return this.layoutService.isSmallScreen().pipe(
      map(smallScreen => smallScreen ? 'over' : 'side')
    )
  }

  linkClicked(): void {
    this.layoutService.isSmallScreen().pipe(
      take(1),
      filter(Boolean)
    ).subscribe(() => {
      this.store.dispatch(toggleMenu())
    })
  }
}
