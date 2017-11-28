import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestMockService {

  constructor(private http: Http) { }

  getStyles(): Observable<any> {
    return this.http.get('./assets/styles.json')
    .map((res: any) => res.json());
  }

}
