import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { NewItemComponent } from './new-item/new-item.component';
import { FiltersComponent } from './filters/filters.component';
import { ListComponent } from './list/list.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HeaderComponent,
    NewItemComponent,
    FiltersComponent,
    ListComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
