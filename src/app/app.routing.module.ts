import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './core/components/login/login.component'
import { AuthGuard } from './core/guards/auth.guard'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, // TODO: guard IF logged-in
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }