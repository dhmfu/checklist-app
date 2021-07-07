import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'app-body-ui',
  templateUrl: './body-ui.component.html',
  styleUrls: ['./body-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyUiComponent {

  @Input() menuVisible = false

}
