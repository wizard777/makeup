import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IMakeup } from '../interface/i-makeup';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products';

  constructor(private _http: HttpClient ) { }

  getMakeup() {
    return this._http.get<IMakeup[]>(`${this.apiUrl}.json`)
  }

  getMakeupId(id: number) {
      return this._http.get<IMakeup>(`${this.apiUrl}/${id}.json`)
      .pipe( map( data => data ))
  }
}
