import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

import { appTitle } from './constants/title'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title) {}
  
  ngOnInit(): void {
    this.titleService.setTitle(appTitle)
  }
}
