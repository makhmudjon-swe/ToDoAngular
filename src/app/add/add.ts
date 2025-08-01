import { Component, inject } from '@angular/core';
import { TodoService } from '../services/todo.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-add',
  imports: [ReactiveFormsModule],
  templateUrl: './add.html',
})
export class Add {
  todoService = inject(TodoService);

  todoForm: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    const data = { ...this.todoForm.value, id: Date.now() };
    this.todoService.adTodo(data);
    console.log(data);
    this.todoForm.reset();
  }
}
