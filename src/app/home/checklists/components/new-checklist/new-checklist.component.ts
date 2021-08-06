import { Component } from '@angular/core'

import { ChecklistsFacadeService } from '../../facade/checklists-facade.service'

import { ChecklistFormData } from '../../../models/checklist-form.interface'

@Component({
  templateUrl: './new-checklist.component.html',
  styleUrls: ['./new-checklist.component.scss']
})
export class NewChecklistComponent {
  list$ = this.checklistsFacade.getQuestionList()

  constructor(private checklistsFacade: ChecklistsFacadeService) {}

  onCreate(formValue: ChecklistFormData): void {
    this.checklistsFacade.createChecklist(formValue)
  }
}
