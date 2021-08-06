import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Observable } from 'rxjs'
import { map, switchMap, take, tap } from 'rxjs/operators'

import { Store } from '@ngrx/store'

import { navigateFromNoChecklist } from '../../../core/store/router/router.actions'

import { selectRoutedChecklist } from '../../store/checklists'

import { ChecklistsFacadeService } from '../facade/checklists-facade.service'

@Injectable({
  providedIn: 'root'
})
export class ChecklistsExistsGuard implements CanActivate {
  constructor(private store: Store, private checklistsFacade: ChecklistsFacadeService) {}

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
    return this.checklistsFacade.loadChecklists()
  }
}
