import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { take, tap } from 'rxjs/operators'

import { Store } from '@ngrx/store'

import { Checklist } from '../../models/checklist.interface'
import { ChecklistFormData } from '../../models/checklist-form.interface'
import { ToggleQuestion } from '../../models/events/toggle-question.interface'

import {
  ChecklistsState,
  createChecklist,
  deleteChecklist,
  loadChecklists,
  selectChecklistsCreating,
  selectChecklistsLoaded,
  selectRoutedChecklist,
  toggleQuestion
} from '../../store/checklists'

import { ChecklistsService } from '../services/checklists.service'

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

  getIsCreating(): Observable<boolean> {
    return this.store.select(selectChecklistsCreating)
  }

  getQuestionList(): Observable<string[]> {
    return this.checklistsService.getDefaultQuestionList()
  }

  deleteChecklist(checklist: Checklist): void {
    this.store.dispatch(deleteChecklist(checklist))
  }

  loadChecklists(): void {
    this.store.select(selectChecklistsLoaded).pipe(
      take(1),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(loadChecklists())
        }
      })
    ).subscribe()
  }

  toggleQuestion(event: ToggleQuestion): void {
    this.store.dispatch(toggleQuestion(event))
  }
}
