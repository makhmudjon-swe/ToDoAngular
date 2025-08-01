import { Component } from '@angular/core';
import { Add } from './add/add';

import { TodoList } from './todo-list/todo-list';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Add, TodoList],
  templateUrl: './app.html',
  providers: [],
})
export class App {}
