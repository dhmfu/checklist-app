import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { fromEvent } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'

import { LayoutStateService } from '../../facade/layout-state.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('ui', { static: true, read: ElementRef }) ui!: ElementRef<HTMLElement>

  constructor(private layoutService: LayoutStateService){}

  onToggleMenu(): void {
    this.layoutService.toggleMenu()
  }

  ngAfterViewInit(): void {
    const uiElement = this.ui.nativeElement

    if (uiElement && uiElement instanceof HTMLElement) {
      this.layoutService.setNavbarHeight(uiElement.offsetHeight)

      fromEvent(window, 'resize').pipe(
        map(() => uiElement.offsetHeight),
        distinctUntilChanged()
      ).subscribe(height => {
        this.layoutService.setNavbarHeight(height)
      })
    }
  }
}
