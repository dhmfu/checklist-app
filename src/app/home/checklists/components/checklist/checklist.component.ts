import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { Checklist } from '../../../models/checklist.interface'
import { ToggleQuestion } from '../../../models/events/toggle-question.interface'

import { ChecklistsFacadeService } from '../../facade/checklists-facade.service'

@Component({
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  checklist$!: Observable<Checklist>

  constructor(private checklistsService: ChecklistsFacadeService) {}

  ngOnInit(): void {
    this.checklist$ = this.checklistsService.getChecklist()
  }

  onQuestionToggled(event: ToggleQuestion): void {
    this.checklistsService.toggleQuestion(event)
  }
}
