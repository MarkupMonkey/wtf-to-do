import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent {
  @Output() newItemAdded = new EventEmitter<Todo>();

  newItemForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {
    this.newItemForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addItem() {
    if (this.newItemForm.valid) {
      const newItem: Todo = {
        id: 'ahsnUFHOIU',
        name: this.newItemForm.value.name,
        description: this.newItemForm.value.description,
        state: false
      };

      this.todoService.addTodo(newItem).subscribe(response => {
        this.newItemAdded.emit(newItem);
        this.newItemForm.reset();
      });
    }
  }
}
