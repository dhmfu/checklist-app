import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { MaterialModule } from '../../shared/material/material.module'

import { NewChecklistComponent } from './components/new-checklist/new-checklist.component'
import { NewChecklistUiComponent } from './components/new-checklist/new-checklist-ui.component'

import { ChecklistsService } from './facade/checklists.service'

import { ChecklistsRoutingModule } from './checklists.routing.module';
import { ChecklistComponent } from './components/checklist/checklist.component'

@NgModule({
  declarations: [
    NewChecklistComponent,
    NewChecklistUiComponent,
    ChecklistComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule,
    ChecklistsRoutingModule
  ],
  providers: [
    ChecklistsService
  ]
})
export class ChecklistsModule { }
