import { Component } from '@angular/core'

import { LayoutStateService } from '../../../core/facade/layout-state.service'

import { SidenavService } from '../../facade/sidenav.service'

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menuVisible$ = this.layoutState.getMenuVisible()
  menuItems$ = this.sidenavService.getMenuItems()
  sidenavMode$ = this.sidenavService.resolveMode()

  constructor(private layoutState: LayoutStateService, private sidenavService: SidenavService) {}

  onBackdropClicked(): void {
    this.layoutState.toggleMenu()
  }

  onLinkClicked(): void {
    this.sidenavService.linkClicked()
  }
}
