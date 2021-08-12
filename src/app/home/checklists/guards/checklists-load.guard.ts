import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'

import { ChecklistsFacadeService } from '../facade/checklists-facade.service'

// This guard is basically side-effect to any checklist-route routing
// It's purpose is to trigger checklists load before getting to actual route

@Injectable({
  providedIn: 'root'
})
export class ChecklistsLoadGuard implements CanActivate {
  constructor(private checklistsFacade: ChecklistsFacadeService) {}

  canActivate(): true {
    this.checklistsFacade.loadChecklists()

    return true
  }
}
