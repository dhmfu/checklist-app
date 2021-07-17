import { AbstractControl } from "@angular/forms"

interface ChecklistFormAbstract {
  name: any
  questions: any
}

export interface ChecklistFormControls extends ChecklistFormAbstract {
  name: AbstractControl
  questions: AbstractControl
}

export interface ChecklistFormData extends ChecklistFormAbstract {
  name: string
  questions: string[]
}