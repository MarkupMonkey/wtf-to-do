import { Component } from '@angular/core';
import { Item } from './items.model';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wtf-to-do';

  filter: "all" | "active" | "done" = "all";

  list: Item[] = [
    { title: "wake up", done: true },
    { title: "fitness", done: true },
    { title: "eat", done: false },
    { title: "meditation", done: true },
  ]

  get items(): Item[] {
    if (this.filter === "all") {
      return this.list;
    }
    return this.list.filter(item => this.filter === "done" ? item.done : !item.done)
  }

  addItem(newItemInput: HTMLInputElement | any, event: Event) {
    event.preventDefault();
    if ('value' in newItemInput && newItemInput.value.trim() !== '') {
      this.list.push({
        title: newItemInput.value,
        done: false
      });
      newItemInput.value = '';
    }
  }

  remove(item: Item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  setFilter(filter: "all" | "active" | "done", event: Event) {
    event.preventDefault()
    this.filter = filter;
  }

  get doneItemsCount(): number {
    return this.list.filter(item => item.done).length;
  }

  get activeItemsCount(): number {
    return this.list.filter(item => !item.done).length;
  }

  removeDoneItems(event: Event) {
    event.preventDefault();
    this.list = this.list.filter(item => !item.done);
  }
}
