import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../items.model';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent {
  @Input() list: Item[] = [] /* Proprietà di input `list`.
  Accetta un array di oggetti `Item` dal componente genitore.*/
  @Output() newItemAdded = new EventEmitter<Item>(); /* Proprietà di output `newItemAdded`.
   Emette eventi al componente genitore.*/

  childInput: string = ''; /* Definizione di una variabile stringa vuota `childInput`.
  Non è utilizzata nel codice fornito.*/


  // Metodo `addItem` che accetta un input HTML (o qualsiasi tipo di dato) e un oggetto Event.
  addItem(newItemInput: HTMLInputElement | any, event: Event) {
    event.preventDefault(); // Previene il comportamento di default dell'evento (ad es., refresh della pagina per un evento di invio del form).

    // Verifica se `newItemInput` ha una proprietà `value` e se questa non è una stringa vuota.
    if ('value' in newItemInput && newItemInput.value.trim() !== '') {
      const newItem: Item = { // Crea un nuovo oggetto `Item`.
        title: newItemInput.value, // Imposta il titolo come il valore dell'`newItemInput`.
        done: false // Imposta la proprietà `done` su `false`.
      };

      this.newItemAdded.emit(newItem); // Emite l'evento `newItemAdded` con il `newItem` come payload.
      newItemInput.value = ''; // Azzera il valore di `newItemInput` (imposta su stringa vuota), probabilmente per pulire il campo di input nella UI.
    }
  }
}
