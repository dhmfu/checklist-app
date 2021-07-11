import { Component } from '@angular/core'

import { ChecklistsService } from '../../facade/checklists.service'

import { ChecklistForm } from '../../../models/checklist-form.interface'

@Component({
  templateUrl: './new-checklist.component.html',
  styleUrls: ['./new-checklist.component.scss']
})
export class NewChecklistComponent {

  list$ = this.checklistsService.getDefaultQuestionList()

  constructor(private checklistsService: ChecklistsService) {}

  onCreate(formValue: ChecklistForm): void {
    this.checklistsService.createChecklist(formValue)
  }

}
