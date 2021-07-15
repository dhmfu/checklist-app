import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core'

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

  @Output() questionToggled = new EventEmitter<ToggleQuestion>()

  onChange(checked: boolean, index: number): void {
    this.questionToggled.emit({ checked, index, id: this.checklist.id })
  }

  trackQuestionsBy(index: number, item: Question): string {
    return item.term
  }
}
