import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'app-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeUiComponent {

  @Input() menuVisible = false

}
