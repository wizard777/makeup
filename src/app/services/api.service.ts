import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMakeup } from '../interface/i-makeup';
import { map, shareReplay } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private cache$: Observable<IMakeup[]>;

  private apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products';
  // private apiUrl = './assets/makeup'

  itemsPerPage = 12;
  page = 1;

  constructor(private _http: HttpClient) { }

  getMakeup() {
     if (!this.cache$) {
     this.cache$ = this._http
      .get<IMakeup[]>(`${this.apiUrl}.json?page=${1}&size=${this.itemsPerPage}`)
      .pipe(
        map((item) =>
          //item.filter((item1) => item1.id < 300)
            item.sort((a: IMakeup, b: IMakeup) =>
              (a.id > b.id) ? 1
              //  : a.id === b.id ? (a.brand > b.brand ? 1 : -1)
                  : -1
            ),
        )
        // cache
        ,shareReplay(1)
      )
    }

      return  this.cache$
  }
  
  getPage(page: any) {
    return this._http.get(
      `${this.apiUrl}?page=${page}&size=${this.itemsPerPage}`
    );
  }

  getMakeupId(id: number) {
    return this._http
      .get<IMakeup>(`${this.apiUrl}/${id}.json`)
      .pipe(map((data) => data));
  }

  // handleError(error: any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.error.status}\nMessage: ${error.error.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return throwError(() => {
  //     return errorMessage;   
  //   });
  // }
}
