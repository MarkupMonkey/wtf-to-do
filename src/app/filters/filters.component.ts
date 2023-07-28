import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../items.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() filter: string = '';
  @Input() list: Item[] = [] || undefined
  @Output() filterChange = new EventEmitter<string>();
  @Output() listChange = new EventEmitter<Item[]>();

  setFilter(filter: "all" | "active" | "done", event: Event) {
    event.preventDefault()
    this.filter = filter;
    this.filterChange.emit(this.filter)
  }

  removeDoneItems(event: Event) {
    event.preventDefault();
    this.list = this.list.filter(item => !item.done);
    this.listChange.emit(this.list)
  }

}
