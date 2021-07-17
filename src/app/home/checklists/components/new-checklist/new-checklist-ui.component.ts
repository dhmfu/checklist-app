import { Component, ChangeDetectionStrategy, Input, OnChanges, Output, EventEmitter } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'

import { ChecklistFormData, ChecklistFormControls } from '../../../models/checklist-form.interface'

// TODO: implement order change

@Component({
  selector: 'app-new-checklist-ui',
  templateUrl: './new-checklist-ui.component.html',
  styleUrls: ['./new-checklist-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewChecklistUiComponent implements OnChanges {
  @Input() list: string[] = []

  checklistForm: FormGroup

  get questions(): FormArray {
    return this.checklistForm.get('questions') as FormArray
  }

  @Output() create = new EventEmitter<ChecklistFormData>()

  constructor(private fb: FormBuilder) {
    const groupConfig: ChecklistFormControls = {
      name: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      questions: this.fb.array([])
    }

    this.checklistForm = this.fb.group(groupConfig)
  }

  ngOnChanges(): void {
    this.questions.clear()

    this.list.forEach(item => {
      this.questions.push(this.fb.control(item, Validators.required))
    })
  }

  onSubmit(): void {
    if (this.checklistForm.valid) { // double check
      this.create.emit(this.checklistForm.value)
    }
  }
}
