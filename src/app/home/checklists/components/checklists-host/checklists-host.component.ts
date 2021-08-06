import { Component, OnInit } from '@angular/core'

import { ChecklistsFacadeService } from '../../facade/checklists-facade.service'

@Component({
  templateUrl: './checklists-host.component.html'
})
export class ChecklistsHostComponent implements OnInit {
  constructor(private checklistsFacade: ChecklistsFacadeService) { }

  ngOnInit(): void {
    this.checklistsFacade.loadChecklists().subscribe()
  }
}
