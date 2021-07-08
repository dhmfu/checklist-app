import { Component } from '@angular/core'

import { LayoutStateService } from '../../facade/layout-state.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private layoutService: LayoutStateService){}

  onToggleMenu(): void {
    this.layoutService.toggleMenu()
  }

}
