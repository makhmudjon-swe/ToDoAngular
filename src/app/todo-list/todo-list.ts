import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoData } from '../models/data';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
})
export class TodoList implements OnInit {
  todoList: TodoData[] = [];
  todoService = inject(TodoService);

  ngOnInit(): void {
    this.todoList = this.todoService.getTodo();
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todoList = this.todoService.getTodo();
  }

  selectedId: number | null = null;

  onSelect(id: number): void {
    this.selectedId = id;
  }

}
