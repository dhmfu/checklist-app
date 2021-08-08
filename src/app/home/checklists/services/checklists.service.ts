import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { environment } from '../../../../environments/environment'

import { DEFAULT_QUESTIONS } from '../../../constants/template'

import { ChecklistFormData } from '../../models/checklist-form.interface'
import { Checklist } from '../../models/checklist.interface'

@Injectable({
  providedIn: 'root'
})
export class ChecklistsService {
  private readonly API_URL = environment.apiUrl

  constructor(private http: HttpClient) {}

  createChecklist(checklistData: ChecklistFormData): Observable<Checklist> {
    const url = this.API_URL + '/checklists'
    
    return this.http.post<Checklist>(url, checklistData)
  }

  deleteChecklist(checklist: Checklist): Observable<void> {
    const url = `${this.API_URL}/checklists/${checklist.id}`

    return this.http.delete<void>(url)
  }
  
  getDefaultQuestionList(): Observable<string[]> {
    return of(DEFAULT_QUESTIONS)
  }

  loadChecklists(): Observable<Checklist[]> {
    const url = this.API_URL + '/checklists'
    
    return this.http.get<Checklist[]>(url)
  }
}
