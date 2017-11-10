import { TtStyleModule } from './modules/tt-style/tt-style.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TtStyleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
