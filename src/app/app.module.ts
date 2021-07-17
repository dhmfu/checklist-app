import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule, Title } from '@angular/platform-browser'

import { CoreModule } from './core/core.module'

import { AppRoutingModule } from './app.routing.module'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
  providers: [Title]
})
export class AppModule { }
