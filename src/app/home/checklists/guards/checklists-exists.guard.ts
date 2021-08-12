import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Observable } from 'rxjs'
import { filter, map, switchMap, take, tap } from 'rxjs/operators'

import { Store } from '@ngrx/store'

import { navigateFromNoChecklist } from '../../../core/store/router/router.actions'

import { selectChecklistsLoaded, selectRoutedChecklist } from '../../store/checklists'

@Injectable({
  providedIn: 'root'
})
export class ChecklistsExistsGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<boolean> {
    return this.storeLoaded().pipe(
      switchMap(() => this.store.select(selectRoutedChecklist)),
      map(checklist => !!checklist),
      take(1),
      tap(exists => {
        if (!exists) {
          this.store.dispatch(navigateFromNoChecklist())
        }
      })
    )
  }

  private storeLoaded(): Observable<boolean> {
    return this.store.select(selectChecklistsLoaded).pipe(
      filter(loaded => loaded)
    )
  }
}
