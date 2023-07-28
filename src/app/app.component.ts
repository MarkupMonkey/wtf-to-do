import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './items.model';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() list: Item[] = [] || undefined;
  @Input() filter: string = "";
  @Input() activeItemsCounter: number = 0;

  onNewItemAdded(newItem: Item): void {
    this.list.push(newItem);
  }
}
