import { TtStyleService } from './../modules/tt-style/tt-style.service';
import { RestMockService } from './../rest-mock.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.css']
})
export class ComponentExampleComponent implements OnInit, OnDestroy {
  stylesSubscription: Subscription;

  template: string;
  styles: any[] = [];

  constructor(
    private restService: RestMockService,
    private stylesService: TtStyleService
  ) {}

  ngOnInit() {
    this.stylesService.removeAddedStyles();

    this.template = 'assets/styles-template.css';

    this.stylesSubscription = this.restService.getStyles().subscribe((styles) => {
      for (const st of styles) {
        const s: any = {
          template: st.template,
          media: st.media,
          vars: [
            {
              VarName: 'AppMainColorValue',
              VarValue: st.bgColor
            },
            {
              VarName: 'AppTextColorValue',
              VarValue: st.textColor
            }
          ]
        };
        this.styles.push(s);
      }
    });
  }

  ngOnDestroy() {
    this.stylesSubscription.unsubscribe();
  }
}
