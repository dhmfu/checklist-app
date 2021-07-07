import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Output() toggleMenu = new EventEmitter<void>()
}
