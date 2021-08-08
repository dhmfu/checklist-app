import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { map, switchMap, tap } from 'rxjs/operators'

import { Actions, createEffect, ofType } from '@ngrx/effects'

import { createChecklist, createChecklistSuccess, deleteChecklist, deleteChecklistSuccess, loadChecklists, loadChecklistsSuccess } from './checklists.actions'
import { ChecklistsService } from '../../checklists/services/checklists.service'
import { from } from 'rxjs'
 
@Injectable()
export class ChecklistsEffects {
  createChecklist$ = createEffect(() => this.actions$.pipe(
    ofType(createChecklist),
    switchMap(({ name, questions }) => this.checklistsService.createChecklist({ name, questions })),
    map(response => createChecklistSuccess(response))
    // TODO: error handling
  ))

  createChecklistSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createChecklistSuccess),
    tap(action => {
      this.router.navigate(['checklists', action.id])
    })
  ), { dispatch: false })

  deleteChecklist$ = createEffect(() => this.actions$.pipe(
    ofType(deleteChecklist),
    switchMap(action => {
      return this.checklistsService.deleteChecklist(action).pipe(
        switchMap(() => from(this.router.navigate(['checklists', 'new']))),
        map(() => deleteChecklistSuccess(action))
        // TODO: error handling
      )
    })
  ))

  loadChecklists$ = createEffect(() => this.actions$.pipe(
    ofType(loadChecklists),
    switchMap(() => this.checklistsService.loadChecklists()),
    map(response => loadChecklistsSuccess({ checklists: response }))
    // TODO: error handling
  ))

  constructor(private actions$: Actions, private checklistsService: ChecklistsService, private router: Router) {}
}