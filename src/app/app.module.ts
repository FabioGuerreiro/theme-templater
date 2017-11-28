import { TtStyleService } from './modules/tt-style/tt-style.service';
import { RestMockService } from './rest-mock.service';
import { TtStyleModule } from './modules/tt-style/tt-style.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentExampleComponent } from './component-example/component-example.component';
import { ServiceExampleComponent } from './service-example/service-example.component';

const routes: Routes = [
  { path: '', redirectTo: 'Component', pathMatch: 'full'},
  { path: 'Component', component: ComponentExampleComponent },
  { path: 'Service', component: ServiceExampleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentExampleComponent,
    ServiceExampleComponent
  ],
  imports: [
    BrowserModule,
    TtStyleModule,
    RouterModule.forRoot(routes, {useHash: false}),
  ],
  providers: [
    RestMockService,
    TtStyleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
