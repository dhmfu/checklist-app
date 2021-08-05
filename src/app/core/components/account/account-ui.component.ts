import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core'

@Component({
  selector: 'app-account-ui',
  templateUrl: './account-ui.component.html',
  styleUrls: ['./account-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountUiComponent {
  @Input() name = 'Користувач'
  @Output() logout = new EventEmitter<void>()
}
