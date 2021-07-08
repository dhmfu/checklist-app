import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'

import { StoreModule } from '@ngrx/store'

import { uiFeatureKey, uiReducer } from './store/ui.reducer'

import { BodyUiComponent } from './components/body/body-ui.component'
import { BodyComponent } from './components/body/body.component'
import { NavbarUiComponent } from './components/navbar/navbar-ui.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { MaterialModule } from '../shared/material/material.module'

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarUiComponent,
    BodyComponent,
    BodyUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(uiFeatureKey, uiReducer),
    MaterialModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    NavbarComponent,
    BodyComponent
  ]
})
export class LayoutModule { }
