import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { TodoData } from '../models/data';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoList: TodoData[] = [];

  getTodo(): TodoData[] {
    return this.todoList;
  }

  adTodo(todo: TodoData): void {
    this.todoList.push(todo);
    localStorage.setItem('todo', JSON.stringify(this.todoList));
  }

  deleteTodo(id: number): void {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }
}
