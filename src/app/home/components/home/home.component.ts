import { Component } from '@angular/core'
import { Observable } from 'rxjs'

import { LayoutStateService } from '../../../core/facade/layout-state.service'

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  menuVisible$: Observable<boolean> = this.layoutState.getMenuVisible()

  constructor(private layoutState: LayoutStateService) {}

}
