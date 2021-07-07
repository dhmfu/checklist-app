import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app.routing.module'

import { uiReducer } from './store/ui.reducer'

import { AppComponent } from './app.component'

import { BodyComponent } from './components/body/body.component'
import { BodyContainerComponent } from './containers/body-container/body-container.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { NavbarContainerComponent } from './containers/navbar-container/navbar-container.component'

import { MaterialModule } from './shared/material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    NavbarContainerComponent,
    NavbarComponent,
    BodyContainerComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ ui: uiReducer }),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
