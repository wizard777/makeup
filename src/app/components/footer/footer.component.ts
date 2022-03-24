

import { Component, Input, OnInit } from '@angular/core';
import {  map, tap} from 'rxjs/operators';
import { IMakeup } from 'src/app/interface/i-makeup';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  makeupData: string[];

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this.getTag();
  }

  getTag() {
    this._api.getMakeup()
      .pipe(
        map(response => { return response.map(item => (item.tag_list)) }),
      //  tap(el => console.log(el)),
        map(res => Array.from(new Set([].concat(...res)))),
      )
      .subscribe(res => {
        this.makeupData = res;
      }
      )
  }
}
