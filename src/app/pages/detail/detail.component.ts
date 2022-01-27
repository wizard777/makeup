import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { IMakeup, ProductColor } from 'src/app/interface/i-makeup';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  makeup$ : Observable<IMakeup>

  constructor( private _api: ApiService, private _activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRouted.paramMap.subscribe( param => {
      console.log(param, 'param Id')
      this.makeup$ = this._api.getMakeupId( Number(param.get('id')) )
      .pipe( tap ( res => console.log( res )))  
    })
  }


  getMakeupColorName( color: ProductColor[] ) {
    return color.map( res => res.colour_name ).join(', ')
  }


  getMakeupHex( color: ProductColor[] ) {
    return color.map( res => res.hex_value).join(', ')
  }
}
