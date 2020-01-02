import { Component, OnInit,Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo:Todo;
  constructor() { }

  ngOnInit() {
  }
  setStyleClass(){
    let classtrigger={
     //todo:true,//we always want to load class
     'is-complete':this.todo.completed//if completed is true it will call
     //css is-complete class and apply ti div
    }
     return classtrigger;
  }
  onToggle(todo){
console.log("toggled");
  todo.completed=!todo.completed;
  }
  onDelete(todo)
  {
    console.log("deleted");
    this.todo.completed=true;
  }
}
