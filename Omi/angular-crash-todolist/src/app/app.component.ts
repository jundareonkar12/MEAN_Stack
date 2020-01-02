import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todolist';
  name:string="Onkar";//recommended to use type i.e string for property
  constructor()
  {
this.changeName("sagar");
  }
  changeName(name:string):void {
    this.name=name;
  }
  
}
