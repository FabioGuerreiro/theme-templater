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
import { TtStyleModule, TtStyleService } from 'theme-templater';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [TtStyleModule, ...],  
  providers: [TtStyleService, ...],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Usage Examples

### Using Component

Having `styles-template.css` inside the assets folder:
```css
.header{
    background: AppMainColorValue !important;
    color: AppTextColorValue !important;
}
```

`app.component.ts`:
```js
import { TtStyleVar } from 'theme-templater';
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

### Using Service

Assuming the same `styles-template.css` from the previous example and RestService that returns a list of different styles to create.

this being my styles list in a json file:
```js
[
  {
    "media": "only screen and (max-width:1024px)",
    "bgColor": "#222222",
    "textColor": "#ffffff"
  },
  {
    "media": "only screen and (min-width:1025px)",
    "bgColor": "#990000",
    "textColor": "#ffffff"
  }
]
```

`app.component.ts`:
```js
import { TtStyleVar, TtStyleService } from 'theme-templater';
import { RestService } from './rest.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  stylesSubscription: Subscription;

  template: string;

  constructor(
    private restService: RestService,
    private stylesService: TtStyleService
  ) {}

  ngOnInit() {
    this.stylesService.removeAddedStyles();

    this.template = 'assets/styles-template.css';

    this.stylesSubscription = this.restService.getStyles().subscribe((styles) => {
      for (const st of styles) {
        const vars = [
          {
            VarName: 'AppMainColorValue',
            VarValue: st.bgColor
          },
          {
            VarName: 'AppTextColorValue',
            VarValue: st.textColor
          }
        ];

        this.stylesService.start(this.template, vars, st.media);
      }
    });
  }

  ngOnDestroy() {
    this.stylesSubscription.unsubscribe();
  }
}
```


## TODO

- check if final result is valid css
- opt between creating a style tag or a css file
