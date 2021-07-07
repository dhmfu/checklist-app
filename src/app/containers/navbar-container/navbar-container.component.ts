import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/app.state'
import { toggleMenu } from 'src/app/store/ui.actions'

@Component({
  selector: 'app-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.scss']
})
export class NavbarContainerComponent {

  constructor(private store: Store<AppState>){}

  onToggleMenu(): void {
    this.store.dispatch(toggleMenu())
  }

}
