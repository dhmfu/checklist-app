import { ValidatorFn, AbstractControl, FormGroup } from "@angular/forms"

export const PASSWORD_MISMATCH_ERROR_KEY = 'mustMatch'

export const passwordsMatch: ValidatorFn = (formControl: AbstractControl) => {
  const formGroup = formControl as FormGroup
  const control = formGroup.controls.password
  const matchingControl = formGroup.controls.confirmPassword

  if (control.value !== matchingControl.value) {
      return { [PASSWORD_MISMATCH_ERROR_KEY]: true }
  } else {
      return null
  }
}