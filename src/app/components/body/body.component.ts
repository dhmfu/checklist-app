import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent {

  @Input() menuVisible = false

}
