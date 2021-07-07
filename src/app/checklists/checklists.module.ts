import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { ChecklistsComponent } from './checklists.component'
import { NewChecklistContainerComponent } from './containers/new-checklist-container/new-checklist-container.component'
import { NewChecklistFormComponent } from './components/new-checklist-form/new-checklist-form.component'
import { MaterialModule } from '../shared/material/material.module'


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
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ChecklistsModule { }
