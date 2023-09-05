import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() todos: Todo[] = [];
  @Output() newItemInput = new EventEmitter<Todo>()
  @Input() filter: string = '';

  displayedList: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  ngOnChanges(): void {
    this.filterTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
      this.filterTodos();
      console.log(data)
    });
  }

  filterTodos(): void {
    switch (this.filter) {
      case 'to_complete':
        this.displayedList = this.todos.filter(item => !item.state);
        break;
      case 'complete':
        this.displayedList = this.todos.filter(item => item.state);
        break;
      default:
        this.displayedList = this.todos;
    }
  }

  remove(item: Todo): void {
    this.todoService.deleteTodo(item.id).subscribe(response => {
      const index = this.todos.findIndex(todo => todo.id === item.id);
      if (index !== -1) {
        this.todos.splice(index, 1);
        this.filterTodos();
      }
    });
  }
}
