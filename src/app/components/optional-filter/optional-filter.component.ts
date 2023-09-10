import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-optional-filter',
  templateUrl: './optional-filter.component.html',
  styleUrls: ['./optional-filter.component.scss']
})
export class OptionalFilterComponent implements OnInit {

  showCategory = false;


  @Input() options: string[];
  @Input() value: string;

    @Input() placeholder: string;

  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select(category: string) {
    this.valueChange.emit(category);

    if (category) {
      this.showCategory = false;
      //this.placeholder = category.replace("_"," ");
      this.placeholder = category.charAt(0).toUpperCase() + category.slice(1)
    } else {
     this.showCategory = true;
    }
  }

  toggleCategory() {
    this.showCategory = !this.showCategory;
  }
}
