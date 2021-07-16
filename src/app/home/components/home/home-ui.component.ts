import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core'

import { MatDrawerMode } from '@angular/material/sidenav'

import { MenuItem } from '../../models/menu-item.interface'

const NEW_CHECKLIST_MENU_ITEM: MenuItem = {
  id: 'new',
  name: 'Новий список'
}

@Component({
  selector: 'app-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeUiComponent {
  _menuItems: MenuItem[] = []
  @Input() set menuItems(items: MenuItem[]) {
    this._menuItems = [NEW_CHECKLIST_MENU_ITEM, ...items]
  }
  @Input() menuVisible = false
  @Input() sidenavMode: MatDrawerMode = 'side'
  
  @Output() backdropClicked = new EventEmitter<void>()
  @Output() linkClicked = new EventEmitter<void>()

  onBackdropClicked(): void {
    this.backdropClicked.emit()
  }

  onLinkClick(): void {
    this.linkClicked.emit()
  }
}
