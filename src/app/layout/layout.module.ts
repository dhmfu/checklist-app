import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { StoreModule } from '@ngrx/store'

import { MaterialModule } from '../shared/material/material.module'

import { uiFeatureKey, uiReducer } from './store/ui.reducer'

import { BodyUiComponent } from './components/body/body-ui.component'
import { BodyComponent } from './components/body/body.component'
import { NavbarUiComponent } from './components/navbar/navbar-ui.component'
import { NavbarComponent } from './components/navbar/navbar.component'

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarUiComponent,
    BodyComponent,
    BodyUiComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    StoreModule.forFeature(uiFeatureKey, uiReducer)
  ],
  exports: [
    NavbarComponent,
    BodyComponent
  ]
})
export class LayoutModule { }
