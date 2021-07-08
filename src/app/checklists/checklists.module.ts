import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { MaterialModule } from '../shared/material/material.module'

import { ChecklistsComponent } from './checklists.component'
import { NewChecklistContainerComponent } from './containers/new-checklist-container/new-checklist-container.component'
import { NewChecklistFormComponent } from './components/new-checklist-form/new-checklist-form.component'

const routes: Routes = [
  { path: 'new', component: NewChecklistContainerComponent },
  { path: '', redirectTo: 'new', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    ChecklistsComponent,
    NewChecklistContainerComponent,
    NewChecklistFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule
  ]
})
export class ChecklistsModule { }
