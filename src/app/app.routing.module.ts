import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './core/components/login/login.component'
import { SignUpComponent } from './core/components/sign-up/sign-up.component'

import { AuthGuard } from './core/guards/auth.guard'
import { LoginGuard } from './core/guards/login.guard'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [LoginGuard]
  },
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