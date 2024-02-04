import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarHome',
  templateUrl: './navbarHome.component.html',
  styleUrls: ['./navbarHome.component.scss']
})
export class NavbarHomeComponent implements OnInit {
  sticky: boolean = false;

  yy: any = 0;

  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    let window = event.currentTarget as Window;
    console.log('pozycja Y', Math.floor(window.scrollY), this.sticky);

     this.sticky = window.scrollY >= 100;
     this.yy = Math.floor(window.scrollY);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
