import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app.routing.module'

import { LayoutModule } from './layout/layout.module'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
