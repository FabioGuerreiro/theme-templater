import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { TtStyleComponent } from './tt-style.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BrowserModule
  ],
  declarations: [
    TtStyleComponent
  ],
  exports: [
    TtStyleComponent
  ]
})
export class TtStyleModule {}
