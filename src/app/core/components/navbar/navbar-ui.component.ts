import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-navbar-ui',
  templateUrl: './navbar-ui.component.html',
  styleUrls: ['./navbar-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarUiComponent {
  @Output() toggleMenu = new EventEmitter<void>()
}
