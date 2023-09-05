import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  editable = false;

  @Input() item!: Todo;

  @Output() remove = new EventEmitter<Todo>();

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.name = description;
  }

}
