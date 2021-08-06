import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatDialogModule } from '@angular/material/dialog'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { SidenavService } from './facade/sidenav.service'

import { MaterialModule } from '../shared/material/material.module'

import { HomeRoutingModule } from './home.routing.module'

import { homeFeatureKey, homeReducers } from './store'
import { ChecklistsEffects } from './store/checklists'

import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component'
import { HomeComponent } from './components/home/home.component'
import { HomeUiComponent } from './components/home/home-ui.component'

@NgModule({
  declarations: [
    HomeComponent,
    HomeUiComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature(homeFeatureKey, homeReducers),
    EffectsModule.forFeature([ChecklistsEffects]),
    RouterModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule,
    MaterialModule
  ],
  providers: [
    SidenavService
  ]
})
export class HomeModule { }
