import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core'

import { MatDrawerMode } from '@angular/material/sidenav'

import { MenuItem } from '../../models/menu-item.interface'

@Component({
  selector: 'app-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeUiComponent {
  @Input() menuItems: MenuItem[] = []
  @Input() menuVisible = false
  @Input() sidenavMode: MatDrawerMode = 'side'
  
  @Output() backdropClicked = new EventEmitter<void>()

  onBackdropClicked(): void {
    this.backdropClicked.emit()
  }
}
