import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-todo',
  styleUrl: './todo.css',
  templateUrl: './todo.html',
})
export class Todo {
  todoList = [ 
{task:"Quizz 2 Angular", state:"not yet"}, 
{task:"EX2 TP2 Angular", state:"not yet"},  
{task:"Exercice UML", state:"done"},  
{task:"Installation Oracle", state:"done"}, 
{task:"Réviser cours POO", state:"in progress"}  ] ;
com(item:any){
  item.state="in progress";
}
ter(item:any){
  item.state="terminer";
}
}
