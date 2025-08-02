import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { TodoData } from '../models/data';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoList: TodoData[] = [];

  constructor() {
    const savedTodo = localStorage.getItem('todo');
    this.todoList = savedTodo ? JSON.parse(savedTodo) : [];
  }

  getTodo(): TodoData[] {
    return this.todoList;
  }

  getTodoById(id: number): TodoData | undefined {
    return this.todoList.find((todo) => todo.id === id);
  }

  adTodo(todo: TodoData): void {
    this.todoList.push(todo);
    this.savedLocalStorage();
  }

  deleteTodo(id: number): void {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    this.savedLocalStorage();
  }

  updateTodo(id: number, updatedTodo: TodoData): void {
    const index = this.todoList.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todoList[index] = updatedTodo;
      this.savedLocalStorage();
    }
  }

  private savedLocalStorage(): void {
    localStorage.setItem('todo', JSON.stringify(this.todoList));
  }
}
