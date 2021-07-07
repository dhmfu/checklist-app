import { Component, OnInit } from '@angular/core'
import { DEFAULT_QUESTIONS } from 'src/app/constants/template'

@Component({
  templateUrl: './new-checklist-container.component.html',
  styleUrls: ['./new-checklist-container.component.scss']
})
export class NewChecklistContainerComponent implements OnInit {

  list: string[] = []

  ngOnInit(): void {
    this.list = DEFAULT_QUESTIONS
  }

}
