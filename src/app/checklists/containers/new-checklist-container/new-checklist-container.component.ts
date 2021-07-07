import { Component, OnInit } from '@angular/core'
// TODO: Not direct list import
import { DEFAULT_QUESTIONS } from 'src/app/constants/template'

import { ChecklistForm } from '../../components/new-checklist-form/new-checklist-form.component'

@Component({
  templateUrl: './new-checklist-container.component.html',
  styleUrls: ['./new-checklist-container.component.scss']
})
export class NewChecklistContainerComponent implements OnInit {

  list: string[] = []

  ngOnInit(): void {
    this.list = DEFAULT_QUESTIONS
  }

  onCreate(formValue: ChecklistForm): void {
    console.log(formValue)
  }

}
