import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { EffectsModule } from '@ngrx/effects'
import { ActionReducer, StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { localStorageSync } from 'ngrx-store-localstorage'

import { MaterialModule } from '../shared/material/material.module'

import { AccountComponent } from './components/account/account.component'
import { AccountUiComponent } from './components/account/account-ui.component'
import { BodyComponent } from './components/body/body.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { NavbarUiComponent } from './components/navbar/navbar-ui.component'
import { LoginComponent } from './components/login/login.component'
import { LoginUiComponent } from './components/login/login-ui.component'

import { JwtInterceptor } from './interceptors/jwt.interceptor'

import { coreReducers } from './store'
import { uiFeatureKey } from './store/ui'
import { AuthEffects, authFeatureKey } from './store/auth'
import { RouterEffects } from './store/router'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: [uiFeatureKey, authFeatureKey], rehydrate: true })(reducer)
}

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarUiComponent,
    BodyComponent,
    LoginComponent,
    LoginUiComponent,
    AccountComponent,
    AccountUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forRoot(coreReducers, { metaReducers: [localStorageSyncReducer] }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AuthEffects, RouterEffects]),
    MaterialModule,
    MatMenuModule,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    BodyComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]
})
export class CoreModule { }
