import { Component, Input, OnInit } from '@angular/core';
import { IMakeup } from 'src/app/interface/i-makeup';

@Component({
  selector: 'app-makeup-card',
  templateUrl: './makeup-card.component.html',
  styleUrls: ['./makeup-card.component.scss']
})
export class MakeupCardComponent implements OnInit {

  @Input() makeupI: IMakeup;

  constructor() { }

  ngOnInit(): void {
  }

 

}
