import { Component, HostListener, OnInit} from '@angular/core';
import { IMakeup } from 'src/app/interface/i-makeup';
import { ApiService } from 'src/app/services/api.service';


const CATEGORY_OPTIONS = ['pencil', 'lipstick', 'liquid', 'powder', 'lip_gloss', 'palette', 'cream', 'mineral', 'bb_cc', 'highlighter'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent implements OnInit {

 
  makeupData: IMakeup[];
  isLoading: boolean = true;
  errorMessage = "";
  search: string;
  categoryFilter: string;
  categoryOptions = CATEGORY_OPTIONS;

  page: number = 1;
  totalLength: any;

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
 
  
   // this.loading = true;
    this._api.getMakeup()
     // .pipe( )
      .subscribe(response => {
        this.makeupData = response;
        this.totalLength = this.makeupData.length;
      },
        (error) => {
          this.errorMessage = error;
          this.isLoading = false;
        },
        () => {

          this.isLoading = false;
        }
      ) 
  }

  get products() {
    return this.makeupData ?
      this.makeupData.filter(makeup => this.search ?
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

  // animateToTop(e) {
  //   e.preventDefault();
  //   let scrollToTop = window.setInterval(() => {
  //     let pos = window.pageYOffset;   
  //     if (pos > 0) {
  //       window.scrollTo(0, pos - 20);
  //     } else {
  //       window.clearInterval(scrollToTop);
  //     }
  //   }, 1);
  // } 

  sticky: boolean = false;


  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    let window = event.currentTarget as Window;
    console.log('scroll Y', Math.floor(window.scrollY), this.sticky);

     this.sticky = window.scrollY >= 130;
  
    
  }

}
