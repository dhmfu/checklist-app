import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { take } from 'rxjs/operators'

import { Store } from '@ngrx/store'

import { Checklist } from '../../models/checklist.interface'
import { ChecklistFormData } from '../../models/checklist-form.interface'
import { ToggleQuestion } from '../../models/events/toggle-question.interface'

import {
  ChecklistsState,
  createChecklist,
  deleteChecklist,
  selectAsMenuItems,
  selectRoutedChecklist,
  toggleQuestion
} from '../../store/checklists'

import { ChecklistsService } from '../services/checklists.service'

@Injectable()
export class ChecklistsFacadeService {
  constructor(
    private store: Store<ChecklistsState>,
    private router: Router,
    private checklistsService: ChecklistsService
  ) {}

  createChecklist(data: ChecklistFormData): void {
    this.store.dispatch(createChecklist(data))

    this.store.select(selectAsMenuItems).pipe(take(1)).subscribe((items) => {
      this.router.navigate(['checklists', items[items.length - 1].id])
    })
  }

  getChecklist(): Observable<Checklist> {
    return this.store.select(selectRoutedChecklist)
  }

  getQuestionList(): Observable<string[]> {
    return this.checklistsService.getDefaultQuestionList()
  }

  deleteChecklist(checklist: Checklist): void {
    this.router.navigate(['checklists', 'new']).then(() => {
      this.store.dispatch(deleteChecklist(checklist))
    })
  }

  toggleQuestion(event: ToggleQuestion): void {
    this.store.dispatch(toggleQuestion(event))
  }
}
