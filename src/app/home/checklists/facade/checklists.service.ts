import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, of } from 'rxjs'
import { take } from 'rxjs/operators'

import { Store } from '@ngrx/store'

import { DEFAULT_QUESTIONS } from '../../../constants/template'

import { Checklist } from '../../models/checklist.interface'
import { ChecklistForm } from '../../models/checklist-form.interface'
import { ToggleQuestion } from '../../models/events/toggle-question.interface'

import { ChecklistsState, createChecklist, selectAsMenuItems, selectRoutedChecklist, toggleQuestion } from '../../store/checklists'

@Injectable()
export class ChecklistsService {
  constructor(private store: Store<ChecklistsState>, private router: Router) {}

  createChecklist(data: ChecklistForm): void {
    this.store.dispatch(createChecklist(data))

    this.store.select(selectAsMenuItems).pipe(take(1)).subscribe((items) => {
      this.router.navigate(['checklists', items[items.length - 1].id])
    })
  }

  getChecklist(): Observable<Checklist> {
    return this.store.select(selectRoutedChecklist)
  }

  getDefaultQuestionList(): Observable<string[]> {
    return of(DEFAULT_QUESTIONS) // TODO: still gonna be moved one layer up, this data has to be fetched from core level
  }

  toggleQuestion(event: ToggleQuestion): void {
    this.store.dispatch(toggleQuestion(event))
  }
}
