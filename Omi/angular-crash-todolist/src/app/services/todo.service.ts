import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Todo} from '../models/Todo'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
todosUrl:string="http://jsonplaceholder.typicode.com/todos";
  constructor(public http:HttpClient)//u also need to inject 
  //httpclient module into CTOR as we injected service
   { }
  getTodos():Observable<Todo[]>
  {
   /* return [{id:1,title:'todo1',completed:false},
    {id:2,title:'todo2',completed:true},
    {id:3,title:'todo3',completed:false},
    {id:4,title:'todo4',completed:true},]*/
    return this.http.get<Todo[]>(this.todosUrl)
  }
}
