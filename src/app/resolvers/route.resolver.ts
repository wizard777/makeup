import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { IMakeup } from '../interface/i-makeup';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class RouteResolver implements Resolve<IMakeup> {
  constructor(private api: ApiService) { }

  // użycie modułu rozpoznawania nazw do pobrania danych produktu przed przejściem do strony
  resolve(route: ActivatedRouteSnapshot):Observable<IMakeup> {
    const makeupId = JSON.parse(route.paramMap.get('id')) 
    return this.api.getMakeupId(makeupId);
    //return this.api.getMakeupId(route.params.id)
  }

}
