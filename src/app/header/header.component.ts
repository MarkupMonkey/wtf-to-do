import { Component, Input } from '@angular/core';
import { Item } from '../items.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'wtf-to-do';
  @Input() list: Item[] = [
    { title: "wake up", done: true },
    { title: "fitness", done: true },
    { title: "eat", done: false },
    { title: "meditation", done: true },
  ]

}
