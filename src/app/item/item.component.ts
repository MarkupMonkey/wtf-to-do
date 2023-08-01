import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../items.model';

@Component({
  selector: 'app-item', // Selettore usato per utilizzare questo componente in altre parti dell'applicazione.
  templateUrl: './item.component.html', // Percorso al template HTML di questo componente.
  styleUrls: ['./item.component.scss'] // Percorso ai file di stile per questo componente.
})
export class ItemComponent {
  editable = false; // Variabile che determina se l'elemento è attualmente modificabile.

  @Input() item!: Item; // Proprietà di input `item`. Accetta un oggetto `Item` dal componente genitore. Il simbolo `!` indica che TypeScript dovrebbe assumere che questa proprietà sarà sempre definita.

  @Output() remove = new EventEmitter<Item>(); // Proprietà di output `remove`. Emette eventi al componente genitore, inviando un oggetto `Item` che deve essere rimosso.

  // Metodo `saveItem`. Questo metodo viene utilizzato per salvare la descrizione modificata di un elemento.
  saveItem(description: string) {
    if (!description) return; // Se non è stata fornita una descrizione, il metodo termina qui.
    this.editable = false; // Imposta `editable` su false, indicando che l'elemento non è più in modalità di modifica.
    this.item.title = description; // Aggiorna il titolo dell'elemento con la nuova descrizione.
  }
}
