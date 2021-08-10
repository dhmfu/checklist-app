import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatListModule } from '@angular/material/list'

import { MaterialModule } from '../../shared/material/material.module'

import { ChecklistsRoutingModule } from './checklists.routing.module'

import { NewChecklistComponent } from './components/new-checklist/new-checklist.component'
import { NewChecklistUiComponent } from './components/new-checklist/new-checklist-ui.component'

import { ChecklistComponent } from './components/checklist/checklist.component'
import { ChecklistUiComponent } from './components/checklist/checklist-ui.component'
import { ChecklistsHostComponent } from './components/checklists-host/checklists-host.component'

@NgModule({
  declarations: [
    NewChecklistComponent,
    NewChecklistUiComponent,
    ChecklistComponent,
    ChecklistUiComponent,
    ChecklistsHostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatListModule,
    MaterialModule,
    ChecklistsRoutingModule
  ]
})
export class ChecklistsModule { }
