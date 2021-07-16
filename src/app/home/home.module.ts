import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'

import { StoreModule } from '@ngrx/store'

import { HomeComponent } from './components/home/home.component'
import { HomeUiComponent } from './components/home/home-ui.component'

import { SidenavService } from './facade/sidenav.service'

import { HomeRoutingModule } from './home.routing.module'
import { homeFeatureKey, homeReducers } from './store'

@NgModule({
  declarations: [
    HomeComponent,
    HomeUiComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature(homeFeatureKey, homeReducers),
    RouterModule,
    MatListModule,
    MatSidenavModule
  ],
   providers: [
     SidenavService
   ]
})
export class HomeModule { }
