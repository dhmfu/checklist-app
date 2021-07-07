import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/app.state'
import { toggleMenu } from 'src/app/layout/store/ui.actions'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private store: Store<AppState>){}

  onToggleMenu(): void {
    this.store.dispatch(toggleMenu())
  }

}
