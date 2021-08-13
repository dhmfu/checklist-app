import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding } from '@angular/core'

import { Checklist } from '../../../models/checklist.interface'
import { ToggleQuestion } from '../../../models/events/toggle-question.interface'
import { Question } from '../../../models/question.interface'

@Component({
  selector: 'app-checklist-ui',
  templateUrl: './checklist-ui.component.html',
  styleUrls: ['./checklist-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChecklistUiComponent {
  @Input() checklist!: Checklist

  @HostBinding('class.loading') @Input() loading = false

  @Output() questionToggled = new EventEmitter<ToggleQuestion>()
  @Output() deleteChecklist = new EventEmitter<void>()

  onChange(checked: boolean, index: number): void {
    this.questionToggled.emit({ checked, index, id: this.checklist.id })
  }

  onDeleteClick(): void {
    this.deleteChecklist.emit()
  }

  trackQuestionsBy(index: number, item: Question): string {
    return item.term
  }
}
