import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { DEFAULT_QUESTIONS } from '../../../constants/template'

@Injectable()
export class ChecklistsService {
  getDefaultQuestionList(): Observable<string[]> {
    return of(DEFAULT_QUESTIONS)
  }
}
