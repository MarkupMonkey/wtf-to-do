import { Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Item } from '../items.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() list: Item[] = [] || undefined;
  @Output() newItemIput = new EventEmitter()
  @Input() filter: string = '';

  displayedList: Item[] = [];

  ngOnInit() {
    this.displayedList = this.list;
  }

  ngOnChanges() {
    if (this.filter == 'active') {
      this.displayedList = this.list.filter(item => !item.done);
    }

    else if (this.filter == 'done') {
      this.displayedList = this.list.filter(item => item.done);
    }

    else {
      this.displayedList = this.list;
    }
    console.log(this.displayedList)
  }

  remove(item: Item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
