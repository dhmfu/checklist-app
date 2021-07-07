import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-new-checklist-form',
  templateUrl: './new-checklist-form.component.html',
  styleUrls: ['./new-checklist-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewChecklistFormComponent implements OnChanges {

  @Input() list: string[] = []

  checklistForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.checklistForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      questions: this.fb.array([])
    })

    this.checklistForm.valueChanges.subscribe(() => console.log(this.checklistForm.valid))
  }

  get questions(): FormArray {
    return this.checklistForm.get('questions') as FormArray
  }

  ngOnChanges(): void {
    this.questions.clear()

    this.list.forEach(item => {
      this.questions.push(this.fb.control(item, Validators.required))
    })
  }

}
