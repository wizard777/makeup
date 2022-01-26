import { Component, OnInit } from '@angular/core';
import { IMakeup } from 'src/app/interface/i-makeup';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  makeup:IMakeup[];
  loading: boolean;
  errorMessage = "";

  constructor( private _api: ApiService) { }

  ngOnInit(): void {
    this.loading = true;

    this._api.getMakeup().subscribe( response => {
      console.log('response received')
      this.makeup = response;
     //  console.log(this.makeup)
    },
    (error) => {                              //error() callback
      console.error('Request failed with error')
      this.errorMessage = error;
      this.loading = false;
    },
    () => {                                   //complete() callback
      console.error('Request completed')      //This is actually not needed 
      this.loading = false;
    }

    
    )
  }

}
