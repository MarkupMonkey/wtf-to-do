import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service'; // assuming you've created a service named todo.service.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  list: Todo[] = [];
  filter: string = "";

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.list = todos;
    });
  }

  onNewItemAdded(newItem: Todo): void {
    this.todoService.addTodo(newItem).subscribe(addedTodo => {
      this.list.push(addedTodo);
    });
  }

  // You'll also need methods to handle updates, deletes, and filtering.
  // They will follow a similar pattern: call the service, and upon a successful operation, update the local state (this.list).

}

