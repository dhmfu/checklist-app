import { Component, OnInit } from '@angular/core'

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { AppState } from '../../store/app.state'
import { selectMenuVisible } from '../../store/ui.selectors'

@Component({
  selector: 'app-body-container',
  templateUrl: './body-container.component.html',
  styleUrls: ['./body-container.component.scss']
})
export class BodyContainerComponent implements OnInit {

  menuVisible$: Observable<boolean> = this.store.select(selectMenuVisible)

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    //
  }

}
