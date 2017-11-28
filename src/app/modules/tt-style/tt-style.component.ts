import { TtStyleVar } from './tt-style-var';
import { TtStyleService } from './tt-style.service';
import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'tt-style',
  templateUrl: './tt-style.component.html',
  styleUrls: ['./tt-style.component.css']
})
export class TtStyleComponent implements OnInit {
  @Input() templateFileSrc: string;
  @Input() templateMediaQuery: string;
  @Input() templateVars: TtStyleVar[];

  constructor(private ttService: TtStyleService) {
  }

  ngOnInit() {
    this.ttService.start(this.templateFileSrc, this.templateVars, this.templateMediaQuery);
  }
}
