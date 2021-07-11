import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { MatToolbarModule } from '@angular/material/toolbar'

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { MaterialModule } from '../shared/material/material.module'

import { NavbarComponent } from './components/navbar/navbar.component'
import { NavbarUiComponent } from './components/navbar/navbar-ui.component'

import { coreReducers } from './store'

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forRoot(coreReducers),
    StoreDevtoolsModule.instrument(),
    MaterialModule,
    MatToolbarModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
