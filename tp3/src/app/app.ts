import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo/todo';
import { Country } from './country/country';
import { ListStudent } from './list-student/list-student';


@Component({
  imports: [RouterOutlet, Todo, Country, ListStudent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tp3');
}
