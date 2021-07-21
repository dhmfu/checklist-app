import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { map, take } from 'rxjs/operators'

import { Store } from '@ngrx/store'

import { selectChecklists } from '../../store/checklists'

import { NotificationService } from '../../../core/services/notification.service'

@Injectable({
  providedIn: 'root'
})
export class ChecklistsExistsGuard implements CanActivate {
  constructor(private store: Store, private router: Router, private notifications: NotificationService) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<true | UrlTree> {
    return this.store.select(selectChecklists).pipe(
      map(checklists => {
        if (checklists[route.params['id']]) {
          return true
        } else {
          this.notifications.showMissingChecklistSnackbar()

          return this.router.parseUrl('checklists/new')
        }
      }),
      take(1)
    )
  }
  
}
