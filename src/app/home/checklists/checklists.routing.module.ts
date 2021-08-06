import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ChecklistsExistsGuard } from './guards/checklists-exists.guard'

import { ChecklistComponent } from './components/checklist/checklist.component'
import { NewChecklistComponent } from './components/new-checklist/new-checklist.component'
import { ChecklistsHostComponent } from './components/checklists-host/checklists-host.component'

const routes: Routes = [
  {
    path: '',
    component: ChecklistsHostComponent,
    children: [
      { path: 'new', component: NewChecklistComponent },
      { path: ':id', component: ChecklistComponent, canActivate: [ChecklistsExistsGuard] },
      { path: '', redirectTo: 'new', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChecklistsRoutingModule { }
