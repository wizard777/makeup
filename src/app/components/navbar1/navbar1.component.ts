import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.scss']
})
export class Navbar1Component implements OnInit {
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
