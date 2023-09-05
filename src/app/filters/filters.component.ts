import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() filter: string = '';
  @Input() list: Todo[] = [] || undefined
  @Output() filterChange = new EventEmitter<string>();
  @Output() listChange = new EventEmitter<Todo[]>();

  setFilter(filter: "all" | "active" | "done", event: Event) {
    event.preventDefault()
    this.filter = filter;
    this.filterChange.emit(this.filter)
  }

  removeDoneItems(event: Event) {
    event.preventDefault();
    this.list = this.list.filter(item => !item.state);
    this.listChange.emit(this.list)
  }

}
