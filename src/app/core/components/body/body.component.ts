import { Component, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core'

import { LayoutStateService } from '../../facade/layout-state.service'

@Component({
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  selector: 'app-body'
})
export class BodyComponent implements AfterViewInit {
  @ViewChild('container', { static: true }) containerRef!: ElementRef<HTMLDivElement>

  constructor(private layoutState: LayoutStateService, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.layoutState.getNavbarHeight().subscribe(height => {
      const containerElement = this.containerRef.nativeElement

      if (containerElement && containerElement instanceof HTMLDivElement) { // check here rather than rxjs/filter, 'cause this check has nothing to do with data stream
        this.renderer.setStyle(this.containerRef.nativeElement, 'height', `calc(100% - ${height}px)`)
      }
    })
  }
}
