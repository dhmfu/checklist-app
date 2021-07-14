import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { MatToolbarModule } from '@angular/material/toolbar'

import { ActionReducer, StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { localStorageSync } from 'ngrx-store-localstorage'

import { MaterialModule } from '../shared/material/material.module'

import { NavbarComponent } from './components/navbar/navbar.component'
import { NavbarUiComponent } from './components/navbar/navbar-ui.component'

import { homeFeatureKey } from '../home/store'

import { coreReducers } from './store'
import { uiFeatureKey } from './store/ui'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: [homeFeatureKey, uiFeatureKey], rehydrate: true })(reducer)
}

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forRoot(coreReducers, { metaReducers: [localStorageSyncReducer] }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    MaterialModule,
    MatToolbarModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
