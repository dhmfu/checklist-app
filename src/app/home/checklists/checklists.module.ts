import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'

import { MaterialModule } from '../../shared/material/material.module'

import { NewChecklistComponent } from './components/new-checklist/new-checklist.component'
import { NewChecklistUiComponent } from './components/new-checklist/new-checklist-ui.component'

import { ChecklistsFacadeService } from './facade/checklists-facade.service'

import { ChecklistsService } from './services/checklists.service'

import { ChecklistsRoutingModule } from './checklists.routing.module'

import { ChecklistComponent } from './components/checklist/checklist.component'
import { ChecklistUiComponent } from './components/checklist/checklist-ui.component'

@NgModule({
  declarations: [
    NewChecklistComponent,
    NewChecklistUiComponent,
    ChecklistComponent,
    ChecklistUiComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MaterialModule,
    ChecklistsRoutingModule
  ],
  providers: [
    ChecklistsFacadeService,
    ChecklistsService
  ]
})
export class ChecklistsModule { }
