import { AbstractControl } from "@angular/forms"

interface LoginFormAbstract {
  email: any
  password: any
}

export interface LoginFormControls extends LoginFormAbstract {
  email: AbstractControl
  password: AbstractControl
}

export interface LoginFormData extends LoginFormAbstract {
  email: string
  password: string
}