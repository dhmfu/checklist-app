import { Component } from '@angular/core'

import { MatDialog } from '@angular/material/dialog'

import { LayoutStateService } from '../../../core/facade/layout-state.service'

import { SidenavService } from '../../facade/sidenav.service'
import { MenuItem } from '../../models/menu-item.interface'
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component'

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menuVisible$ = this.layoutState.getMenuVisible()
  menuItems$ = this.sidenavService.getMenuItems()
  sidenavMode$ = this.sidenavService.resolveMode()

  constructor(
    private layoutState: LayoutStateService,
    private sidenavService: SidenavService,
    private dialog: MatDialog
  ) {}

  onBackdropClicked(): void {
    this.layoutState.toggleMenu()
  }

  onLinkClicked(): void {
    this.sidenavService.linkClicked()
  }

  onRemove(item: MenuItem): void {
    this.dialog.open(ConfirmationDialogComponent).afterClosed().toPromise().then((confirmed?: boolean) => {
      if (confirmed) {
        this.sidenavService.removeMenuItem(item)
      }
    })
  }
}
