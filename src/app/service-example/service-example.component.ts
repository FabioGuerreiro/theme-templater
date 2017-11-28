import { TtStyleService } from './../modules/tt-style/tt-style.service';
import { RestMockService } from './../rest-mock.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit, OnDestroy {
  stylesSubscription: Subscription;

  template: string;

  constructor(
    private restService: RestMockService,
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
