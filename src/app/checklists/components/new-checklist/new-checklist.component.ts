import { Component, OnInit } from '@angular/core'
// TODO: Not direct list import
import { DEFAULT_QUESTIONS } from 'src/app/constants/template'

import { ChecklistForm } from './new-checklist-ui.component'

@Component({
  templateUrl: './new-checklist.component.html',
  styleUrls: ['./new-checklist.component.scss']
})
export class NewChecklistComponent implements OnInit {

  list: string[] = []

  ngOnInit(): void {
    this.list = DEFAULT_QUESTIONS
  }

  onCreate(formValue: ChecklistForm): void {
    console.log(formValue)
  }

}
