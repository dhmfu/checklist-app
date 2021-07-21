import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ChecklistComponent } from './components/checklist/checklist.component'

import { ChecklistsExistsGuard } from './guards/checklists-exists.guard'

import { NewChecklistComponent } from './components/new-checklist/new-checklist.component'

const routes: Routes = [
  { path: 'new', component: NewChecklistComponent },
  { path: ':id', component: ChecklistComponent, canActivate: [ChecklistsExistsGuard] },
  { path: '', redirectTo: 'new', pathMatch: 'full' }
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
