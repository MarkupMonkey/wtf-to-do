import { Component, Input } from '@angular/core';
import { Item } from '../items.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Input() list: Item[] = [] || undefined


  get doneItemsCount(): number {
    return this.list.filter(item => item.done).length;
  }

  get activeItemsCount(): number {
    return this.list.filter(item => !item.done).length;
  }

}
