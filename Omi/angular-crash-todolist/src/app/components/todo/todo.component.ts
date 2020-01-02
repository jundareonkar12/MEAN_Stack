import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo'
import { TodoService}from '../../services/todo.service'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 todos:Todo[];
  constructor(public tdservice:TodoService) { }//CTOR basically used to import services

  ngOnInit() {
    //this.todos=this.tdservice.getTodos();
   /* this.todos=[
      {id:1,title:'todo1',completed:false},
      {id:2,title:'todo2',completed:true},
      {id:3,title:'todo3',completed:false},
      {id:4,title:'todo4',completed:true},
    ]*/
    this.tdservice.getTodos().subscribe(retdtodo=>//it will return data in retdtodo
      this.todos=retdtodo)
  }
 
}
