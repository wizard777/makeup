import { Component, OnInit } from '@angular/core';
import { filter, map, take, takeUntil } from 'rxjs/operators';
import { IMakeup } from 'src/app/interface/i-makeup';
import { ApiService } from 'src/app/services/api.service';

const CATEGORY_OPTIONS = ['pencil', 'lipstick', 'liquid', 'powder', 'lip_gloss', 'palette', 'cream', 'mineral', 'bb_cc', 'highlighter'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  makeupData: IMakeup[];
  loading: boolean;
  errorMessage = "";
  search: string;
  categoryFilter: string;
  categoryOptions = CATEGORY_OPTIONS;


  constructor(private _api: ApiService) { }

  ngOnInit(): void {


    this.loading = true;

    this._api.getMakeup().pipe(

    )

      .subscribe(response => {
        // console.log('response received')
        this.makeupData = response;
        console.log(this.makeupData)

      },
        (error) => {
          // console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {
          //  console.error('Request completed')      
          this.loading = false;
        }
      )
  }

  get products() {
    return this.makeupData ?
      this.makeupData.
        filter(makeup => this.search ?
          makeup.name?.toLowerCase().includes(this.search)
          : makeup

        )
        // filter by  category
        .filter(makeup => this.categoryFilter ?
          makeup.category?.includes(this.categoryFilter)
          : this.makeupData
        )

      : this.makeupData;
  }

  animateToTop(e) {
    e.preventDefault();
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

}
