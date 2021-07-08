import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { MaterialModule } from '../shared/material/material.module'

import { NewChecklistComponent } from './components/new-checklist/new-checklist.component'
import { NewChecklistUiComponent } from './components/new-checklist/new-checklist-ui.component'

const routes: Routes = [
  { path: 'new', component: NewChecklistComponent },
  { path: '', redirectTo: 'new', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    NewChecklistComponent,
    NewChecklistUiComponent
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
