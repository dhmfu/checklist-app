import { Injectable } from '@angular/core'

import { MatSnackBar } from '@angular/material/snack-bar'

import { API_ERRORS } from '../../constants/api-errors'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) { }

  showAuthError(error: string): void {
    const errorMessage = API_ERRORS[error] || 'Сталася помилка, спробуйте пізніше'

    this.snackBar.open(errorMessage, undefined, { duration: 2000 })
  }

  showMissingChecklistSnackbar(): void {
    this.snackBar.open('Такого списку не існує, перенаправляємо..', undefined, { duration: 2000 })
  }
}
