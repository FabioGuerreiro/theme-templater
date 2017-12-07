import { TtStyleService } from './tt-style.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { TtStyleComponent } from './tt-style.component';

export { TtStyleService } from './tt-style.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BrowserModule
  ],
  declarations: [
    TtStyleComponent
  ],
  providers: [
    TtStyleService
  ],
  exports: [
    TtStyleComponent
  ]
})
export class TtStyleModule {
  constructor(public ttStyleService: TtStyleService) { }
}
