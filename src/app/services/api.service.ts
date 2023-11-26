import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IMakeup } from '../interface/i-makeup';
import { map, refCount, shareReplay} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private cache$: Observable<IMakeup[]>;

      private apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products';
 // private apiUrl = './assets/makeup'

  constructor(private _http: HttpClient ) { }  

  getMakeup() {
    if( !this.cache$) {
      this.cache$ = this._http.get<IMakeup[]>(`${this.apiUrl}.json`)
    .pipe( shareReplay(1))
    }
    return this.cache$
  // data assets
  //  return this._http.get<IMakeup[]>(`${this.apiUrl}.json`)
  }

  getMakeupId(id: number) {
      return this._http.get<IMakeup>(`${this.apiUrl}/${id}.json`)
      .pipe( map( data => data ))
  }

} 
