import { Injectable } from '@angular/core'
import { combineLatest, Observable } from 'rxjs'

import { Store } from '@ngrx/store'

import { Checklist } from '../../models/checklist.interface'
import { ChecklistFormData } from '../../models/checklist-form.interface'
import { ToggleQuestion } from '../../models/events/toggle-question.interface'

import {
  ChecklistsState,
  createChecklist,
  deleteChecklist,
  loadChecklists,
  selectChecklistsLoaded,
  selectChecklistsLoading,
  selectRoutedChecklist,
  toggleQuestion
} from '../../store/checklists'

import { ChecklistsService } from '../services/checklists.service'
import { filter, map, take, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ChecklistsFacadeService {
  constructor(private store: Store<ChecklistsState>, private checklistsService: ChecklistsService) {}

  createChecklist(data: ChecklistFormData): void {
    this.store.dispatch(createChecklist(data))
  }

  getChecklist(): Observable<Checklist> {
    return this.store.select(selectRoutedChecklist)
  }

  getQuestionList(): Observable<string[]> {
    return this.checklistsService.getDefaultQuestionList()
  }

  deleteChecklist(checklist: Checklist): void {
    this.store.dispatch(deleteChecklist(checklist))
  }

  loadChecklists(): Observable<boolean> {
    return combineLatest([
      this.store.select(selectChecklistsLoaded),
      this.store.select(selectChecklistsLoading)
    ]).pipe(
      tap(([loaded, loading]) => {
        if (!loaded && !loading) {
          this.store.dispatch(loadChecklists())
        }
      }),
      map(([loaded]) => loaded),
      filter(loaded => loaded),
      take(1)
    )
  }

  toggleQuestion(event: ToggleQuestion): void {
    this.store.dispatch(toggleQuestion(event))
  }
}
