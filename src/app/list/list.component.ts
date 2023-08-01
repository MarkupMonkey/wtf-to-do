import { Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Item } from '../items.model';

@Component({
  selector: 'app-list', // Selettore usato per utilizzare questo componente in altre parti dell'applicazione.
  templateUrl: './list.component.html', // Percorso al template HTML di questo componente.
  styleUrls: ['./list.component.scss'] // Percorso ai file di stile per questo componente.
})
export class ListComponent implements OnInit, OnChanges {
  @Input() list: Item[] = [] || undefined; // Proprietà di input `list`. Accetta un array di oggetti `Item` dal componente genitore. Se non definita, verrà impostata come `undefined`.
  @Output() newItemIput = new EventEmitter() // Proprietà di output `newItemInput`. Emette eventi al componente genitore.
  @Input() filter: string = ''; // Proprietà di input `filter`. Accetta una stringa dal componente genitore utilizzata per filtrare gli item da visualizzare.

  displayedList: Item[] = []; // Proprietà locale `displayedList`. Utilizzata per conservare gli item da visualizzare in base al filtro applicato.

  ngOnInit() { // Metodo lifecycle hook `ngOnInit`. Viene eseguito dopo che il componente è stato inizializzato.
    this.displayedList = this.list; // Inizializza `displayedList` con i valori di `list`.
  }

  ngOnChanges() { // Metodo lifecycle hook `ngOnChanges`. Viene eseguito ogni volta che un dato legato con un binding cambia.
    // Se il filtro è 'active', visualizza solo gli item che non sono 'done'.
    if (this.filter == 'active') {
      this.displayedList = this.list.filter(item => !item.done);
    }
    // Se il filtro è 'done', visualizza solo gli item che sono 'done'.
    else if (this.filter == 'done') {
      this.displayedList = this.list.filter(item => item.done);
    }
    // Se non è impostato alcun filtro, visualizza tutti gli item.
    else {
      this.displayedList = this.list;
    }
    console.log(this.displayedList) // Stampa la lista di item da visualizzare per il debug.
  }

  remove(item: Item) { // Metodo `remove`. Rimuove un item specifico dalla lista.
    this.list.splice(this.list.indexOf(item), 1); // Rimuove l'item dall'array `list`.
  }
}
