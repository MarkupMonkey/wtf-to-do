import { Component, Input } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Input() list: Todo[] = [] || undefined


  get doneItemsCount(): number {
    return this.list.filter(item => item.state).length;
  }

  get activeItemsCount(): number {
    return this.list.filter(item => !item.state).length;
  }

}
