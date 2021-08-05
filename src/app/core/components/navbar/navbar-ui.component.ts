import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core'

@Component({
  selector: 'app-navbar-ui',
  templateUrl: './navbar-ui.component.html',
  styleUrls: ['./navbar-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarUiComponent {
  @Input() title = ''
  @Output() logout = new EventEmitter<void>()
  @Output() toggleMenu = new EventEmitter<void>()
}
