import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ChecklistsModule } from './checklists/checklists.module'

const routes: Routes = [
  { path: 'checklists', loadChildren: () => ChecklistsModule }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }