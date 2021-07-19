import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { filter, take, withLatestFrom } from 'rxjs/operators'

import { ConfirmationDialogComponent } from '../../../components/confirmation-dialog/confirmation-dialog.component'

import { Checklist } from '../../../models/checklist.interface'
import { ToggleQuestion } from '../../../models/events/toggle-question.interface'

import { ChecklistsFacadeService } from '../../facade/checklists-facade.service'

@Component({
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  checklist$!: Observable<Checklist>

  constructor(private checklistsService: ChecklistsFacadeService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.checklist$ = this.checklistsService.getChecklist()
  }

  onDeleteChecklist(): void {
    this.dialog.open(ConfirmationDialogComponent).afterClosed().pipe(
      take(1),
      filter(Boolean),
      withLatestFrom(this.checklist$)
    ).subscribe(([, checklist]) => {
      this.checklistsService.deleteChecklist(checklist)
    })
  }

  onQuestionToggled(event: ToggleQuestion): void {
    this.checklistsService.toggleQuestion(event)
  }
}
