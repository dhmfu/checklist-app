import { Component, OnInit } from '@angular/core'

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { AppState } from '../../../store/app.state'
import { selectMenuVisible } from '../../store/ui.selectors'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  menuVisible$: Observable<boolean> = this.store.select(selectMenuVisible)

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    //
  }

}
