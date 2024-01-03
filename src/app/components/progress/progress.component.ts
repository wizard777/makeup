import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  mydata:any;
  percentDone;

   private apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products';
 

  constructor( private httpClient: HttpClient ) { 
    const req = new HttpRequest('GET','apiUrl.json',{ reportProgress:true });

    this.httpClient.request(req)
    .subscribe(data => {
      if(data.type === HttpEventType.DownloadProgress){
        this.percentDone = Math.round(100 * data.loaded / data.total);
        console.log(`Loaded ${this.percentDone}% z ${data.total} bajtow`) 
      }
      else {
        this.mydata = data
      }
    })
  }



  ngOnInit(): void {
  }

}
