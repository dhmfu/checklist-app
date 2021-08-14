import { AbstractControl } from "@angular/forms"

interface SignUpFormAbstract {
  name: any
  email: any
  password: any
}

export interface SignUpFormControls extends SignUpFormAbstract {
  name: AbstractControl
  email: AbstractControl
  password: AbstractControl
  confirmPassword: AbstractControl
}

export interface SignUpFormData extends SignUpFormAbstract {
  name: string
  email: string
  password: string
}