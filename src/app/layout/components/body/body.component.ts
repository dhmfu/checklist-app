import { Component } from '@angular/core'

import { Observable } from 'rxjs'

import { LayoutStateService } from '../../facade/layout-state.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  menuVisible$: Observable<boolean> = this.layoutState.getMenuVisible()

  constructor(private layoutState: LayoutStateService) {}

}
