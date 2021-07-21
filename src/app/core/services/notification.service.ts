import { Injectable } from '@angular/core'

import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) { }

  showMissingChecklistSnackbar(): void {
    this.snackBar.open('Такого списку не існує, перенаправляємо..', undefined, { duration: 2000 })
  }
}
