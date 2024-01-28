import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'makeup';
  
  public url: any;
  

  constructor(private router: Router) {
  
     // wykrywa koneic zmiany trasy
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    })
  }

  // metoda przewija okno do a konkretnym miejscu w dokumencie
  // strona przewijana do góry podczas przechodzenia ze strony na inną
  onActivate() {
    window.scroll(0,0);
} 
}
