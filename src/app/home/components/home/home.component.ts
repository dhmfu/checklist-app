import { Component } from '@angular/core'

import { LayoutStateService } from '../../../core/facade/layout-state.service'

import { SidebarService } from '../../facade/sidebar.service'

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  menuVisible$ = this.layoutState.getMenuVisible()
  menuItems$ = this.sidebarService.getMenuItems()

  constructor(private layoutState: LayoutStateService, private sidebarService: SidebarService) {}

}
