import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { EffectsModule } from '@ngrx/effects'
import { ActionReducer, StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { localStorageSync } from 'ngrx-store-localstorage'

import { MaterialModule } from '../shared/material/material.module'

import { BodyComponent } from './components/body/body.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { NavbarUiComponent } from './components/navbar/navbar-ui.component'
import { LoginComponent } from './components/login/login.component'
import { LoginUiComponent } from './components/login/login-ui.component'

import { homeFeatureKey } from '../home/store'

import { coreReducers } from './store'
import { uiFeatureKey } from './store/ui'
import { AuthEffects, authFeatureKey } from './store/auth'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: [homeFeatureKey, uiFeatureKey, authFeatureKey], rehydrate: true })(reducer)
}

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarUiComponent,
    BodyComponent,
    LoginComponent,
    LoginUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forRoot(coreReducers, { metaReducers: [localStorageSyncReducer] }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AuthEffects]),
    MaterialModule,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    BodyComponent
  ]
})
export class CoreModule { }
