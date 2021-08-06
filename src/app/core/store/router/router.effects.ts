import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { tap } from "rxjs/operators"

import { Actions, createEffect, ofType } from "@ngrx/effects"

import { NotificationService } from "../../services/notification.service"

import { navigateFromNoChecklist } from "./router.actions"

@Injectable()
export class RouterEffects {
  navigateFromNoChecklist$ = createEffect(() => this.actions$.pipe(
    ofType(navigateFromNoChecklist),
    tap(() => {
      this.notifications.showMissingChecklistSnackbar()

      this.router.navigateByUrl('checklists/new')
    })
  ), { dispatch: false })

  constructor(private actions$: Actions, private router: Router, private notifications: NotificationService) {}
}