import { Component, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { IMakeup } from 'src/app/interface/i-makeup';

@Component({
  selector: 'app-makeup-card',
  templateUrl: './makeup-card.component.html',
  styleUrls: ['./makeup-card.component.scss'],
})
export class MakeupCardComponent implements OnInit {
  @Input() makeupI: IMakeup;

  name: string;
  count: number = 25;
  brand;

  constructor() {}

  pictNotLoading(event) {
    event.target.src = 'assets/noImage.jpg';
  }
     

  ngOnInit(): void {
    this.name =
      this.makeupI.name.slice(0, this.count) +
      (this.makeupI.name.length > this.count ? '...' : '');
  }
}
// @Directive({
//   selector: 'img',
// })

// export class LazyLoadImagesDirective {
//   constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
//     const supports = 'loading' in HTMLImageElement.prototype;

//     if (supports) {
//       nativeElement.setAttribute('loading', 'lazy');
//       console.log('Loading attribute added!', nativeElement.loading);
//     } else {
//       console.log('Adding loading attribute is not supported!');
//     }
//   }
// }
