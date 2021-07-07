import { Component, ChangeDetectionStrategy, Input, OnChanges, Output, EventEmitter } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'

// TODO: implement placeholder(s) for questions
// TODO: implement order change

// TODO: move interface
export interface ChecklistForm {
  name: string
  questions: string[]
}

@Component({
  selector: 'app-new-checklist-form',
  templateUrl: './new-checklist-form.component.html',
  styleUrls: ['./new-checklist-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewChecklistFormComponent implements OnChanges {

  @Input() list: string[] = []

  checklistForm: FormGroup

  get questions(): FormArray {
    return this.checklistForm.get('questions') as FormArray
  }

  @Output() create = new EventEmitter()

  constructor(private fb: FormBuilder) {
    this.checklistForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      questions: this.fb.array([])
    })
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
