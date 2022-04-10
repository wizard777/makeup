import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IMakeup} from 'src/app/interface/i-makeup';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  makeup$ : Observable<IMakeup>
  hex: IMakeup[];

  constructor( private _api: ApiService, private _activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {

    this._activatedRouted.paramMap.subscribe( param => {
      this.makeup$ = this._api.getMakeupId( Number(param.get('id')) ) 
    })

     this._api.getMakeup().subscribe( res => {
       this.hex = res
      //  console.log(this.hex)
     })
  }

}
