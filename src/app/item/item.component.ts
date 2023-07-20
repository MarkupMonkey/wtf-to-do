import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../items.model';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  editable = false;


  @Input() item!: Item;

  @Output() remove = new EventEmitter<Item>();


  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.title = description
  }
}
