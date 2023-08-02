import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../items.model';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent {
  @Input() list: Item[] = []
  @Output() newItemAdded = new EventEmitter<Item>();


  childInput: string = '';


  addItem(newItemInput: HTMLInputElement | any, event: Event) {
    event.preventDefault();

    if ('value' in newItemInput && newItemInput.value.trim() !== '') {
      const newItem: Item = {
        title: newItemInput.value,
        done: false
      };

      this.newItemAdded.emit(newItem);
      newItemInput.value = '';
    }
  }
}
