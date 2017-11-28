# theme-templater

Angular 4 library to allow the use of css templates including custom names as variables and replace them with actual values

[NPM](https://www.npmjs.com/package/theme-templater)

[GitHub](https://github.com/FabioGuerreiro/theme-templater)

## Purpose

I found the need change the colors of an application on runtime depending on the authenticated user. The values for these colors are stored in datatbase and are returned via RestService.

The aim of this package is to use a local css file with dummy names for property values as a template and, using a list that relates those names to actual values, create a style tag to override existing styles or simply to create styles on the run.

## Installation

```shell
npm install --save theme-templater
```
Once installed you need to import the main module:
```js
import { TtStyleModule } from 'theme-templater';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [TtStyleModule, ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Usage Example

Having `styles-template.css` inside the assets folder:
```css
.header{
    background: AppMainColorValue !important;
    color: AppTextColorValue !important;
}
```

`app.component.ts`:
```js
import { TtStyleVar } from 'theme-templater/src/app/modules/tt-style/tt-style-var';
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
```

`app.component.html`:
```html
<tt-style [templateFileSrc]="template" [templateVars]="vars"></tt-style>

<div class="header">
  This is but a test...
</div>
```

## TODO

- check if final result is valid css
- opt between creating a <style> tag or a css file
