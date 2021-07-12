import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
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

}
