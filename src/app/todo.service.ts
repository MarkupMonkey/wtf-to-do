import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, retry } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<any>(this.baseUrl).pipe(
      map(response => response.todos)
    );
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  updateTodo(id: string, updatedTodo: any): Observable<Todo> {
    const url = `${ this.baseUrl }/${ id }`;
    return this.http.put<Todo>(url, updatedTodo);
  }

  deleteTodo(id: string): Observable<any> {
    const url = `${ this.baseUrl }/${ id }`;
    return this.http.delete(url);
  }

  filterTodos(order: 'completed' | 'to_complete'): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${ this.baseUrl }?order=${ order }`);
  }
}
