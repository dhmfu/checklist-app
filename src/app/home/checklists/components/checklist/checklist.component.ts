import { Component } from '@angular/core'

import { ChecklistsService } from '../../facade/checklists.service'

@Component({
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {
  checklist$ = this.checklistsService.getChecklist()

  constructor(private checklistsService: ChecklistsService) {}
}
