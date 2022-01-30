import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-optional-filter',
  templateUrl: './optional-filter.component.html',
  styleUrls: ['./optional-filter.component.scss']
})
export class OptionalFilterComponent implements OnInit {

  showCategory = false;

  @Input() placeholder: string;
  @Input() options: string[];
  @Input() value: string;

  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select(category: string) {
    this.valueChange.emit(category);

    if (category) {
      this.showCategory = false;
      this.placeholder = category.replace('_', ' ');
      
    } else {
      this.showCategory = true;
    }

  }

  toggleCategory() {
    this.showCategory = !this.showCategory;
  }

}
