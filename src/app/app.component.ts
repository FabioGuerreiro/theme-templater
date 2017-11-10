import { TtStyleVar } from './modules/tt-style/tt-style-var';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  template: string;
  vars: TtStyleVar[];

  constructor() {
    this.template = 'assets/styles-template.css';
    this.vars = [
      {
        VarName: 'AppMainColorValue',
        VarValue: '#222222'
      },
      {
        VarName: 'AppTextColorValue',
        VarValue: '#ffffff'
      }
    ];
  }
}
