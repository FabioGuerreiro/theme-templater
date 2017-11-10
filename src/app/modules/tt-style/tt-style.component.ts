import { TtStyleVar } from './tt-style-var';
import { Component, OnInit, Input } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'tt-style',
  templateUrl: './tt-style.component.html',
  styleUrls: ['./tt-style.component.css']
})
export class TtStyleComponent implements OnInit {
  @Input() templateFileSrc: string;
  @Input() templateVars: TtStyleVar[];

  public styleResult: string;

  private headers: Headers = new Headers();
  private options: RequestOptions = new RequestOptions();

  constructor(private http: Http) {
    this.headers.append('charset', 'utf-8');
    this.options.headers = this.headers;
  }

  ngOnInit() {
    this.start();
  }

  start() {
    this.http.get(this.templateFileSrc).map( res => {
      const result: any = res;
      this.styleResult = result._body.toString();

      this.createStyle();
    })
    .subscribe();
  }

  createStyle() {
    // Create the <style> tag
    const style = document.createElement('style');
    this.replaceVars();
    style.innerHTML = this.styleResult;
    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute("media", "screen")
    // style.setAttribute("media", "only screen and (max-width : 1024px)")

    // WebKit hack :(
    style.appendChild(document.createTextNode(''));

    // Add the <style> element to the page
    document.head.appendChild(style);
  }

  replaceVars() {
    for (const tvar of this.templateVars) {
      this.styleResult = this.styleResult.split(tvar.VarName).join(tvar.VarValue); 
    }
  }
}
