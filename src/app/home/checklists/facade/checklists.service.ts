import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { Store } from '@ngrx/store'

import { DEFAULT_QUESTIONS } from '../../../constants/template'

import { ChecklistForm } from '../../models/checklist-form.interface'

import { ChecklistsState, createChecklist } from '../../store/checklists'

@Injectable()
export class ChecklistsService {

  constructor(private store: Store<ChecklistsState>) {}

  createChecklist(data: ChecklistForm): void {
    this.store.dispatch(createChecklist(data))
  }

  getDefaultQuestionList(): Observable<string[]> {
    return of(DEFAULT_QUESTIONS) // TODO: still gonna be moved one layer up, this data has to be fetched from core level
  }
}
