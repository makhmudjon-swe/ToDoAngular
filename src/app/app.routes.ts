import { Routes } from '@angular/router';
import { App } from './app';
import { Add } from './add/add';
import { TodoList } from './todo-list/todo-list';

export const routes: Routes = [
  { path: 'add/:id', component: Add },
  { path: 'todo', component: TodoList },
];
