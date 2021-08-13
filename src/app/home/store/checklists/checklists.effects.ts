import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { catchError, debounceTime, groupBy, map, mergeMap, switchMap, tap } from 'rxjs/operators'
import { from, of } from 'rxjs'

import { Actions, createEffect, ofType } from '@ngrx/effects'

import { logout } from '../../../core/store/auth'
import { NotificationService } from '../../../core/services/notification.service'

import { createChecklist, createChecklistFailure, createChecklistSuccess, deleteChecklist, deleteChecklistSuccess, loadChecklists, loadChecklistsSuccess, resetChecklists, toggleQuestion } from './checklists.actions'
import { ChecklistsService } from '../../checklists/services/checklists.service'
 
@Injectable()
export class ChecklistsEffects {
  createChecklist$ = createEffect(() => this.actions$.pipe(
    ofType(createChecklist),
    switchMap(({ name, questions }) => {
      return this.checklistsService.createChecklist({ name, questions }).pipe(
        map(response => createChecklistSuccess(response)),
        catchError((error: HttpErrorResponse) => of(createChecklistFailure({ error: this.extractErrorMessage(error) })))
      )
    })
  ))

  createChecklistSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createChecklistSuccess),
    tap(action => {
      this.router.navigate(['checklists', action.id])
    })
  ), { dispatch: false })

  createChecklistFailure$ = createEffect(() => this.actions$.pipe(
    ofType(createChecklistFailure),
    tap(({ error }) => {
      this.notificationService.showChecklistsError(error)
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

  resetChecklists$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    map(() => resetChecklists())
  ))

  toggleQuestion$ = createEffect(() => this.actions$.pipe(
    ofType(toggleQuestion),
    groupBy(action => action.id),
    mergeMap(group$ => {
      return group$.pipe(
        debounceTime(2000),
        switchMap(action => this.checklistsService.updateQuestions(action.id))
      )
    })
  ), { dispatch: false })

  constructor(
    private actions$: Actions,
    private checklistsService: ChecklistsService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  private extractErrorMessage(error: HttpErrorResponse): string {
    return error.error
  }
}