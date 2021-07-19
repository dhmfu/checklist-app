import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { from, Observable, of } from 'rxjs'
import { filter, map, switchMap, take } from 'rxjs/operators'

import { MatDrawerMode } from '@angular/material/sidenav'

import { Store } from '@ngrx/store'

import { LayoutService } from '../../core/services/layout.service'

import { toggleMenu } from '../../core/store/ui'

import { MenuItem } from '../models/menu-item.interface'

import { removeChecklist, selectAsMenuItems, selectRoutedChecklist } from '../store/checklists'

@Injectable()
export class SidenavService {

  constructor(
    private store: Store,
    private layoutService: LayoutService,
    private router: Router
  ) {}

  getMenuItems(): Observable<MenuItem[]> {
    return this.store.select(selectAsMenuItems)
  }

  removeMenuItem(item: MenuItem): void {
    this.store.select(selectRoutedChecklist).pipe(
      take(1),
      switchMap(checklist => checklist.id === item.id ? from(this.router.navigate(['checklists', 'new'])) : of(true))
    ).subscribe(() => {
      this.store.dispatch(removeChecklist(item))
    })
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
