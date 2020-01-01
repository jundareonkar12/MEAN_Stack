import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EStoreApp';
  company='Adolf Solutions';
  Mentor={
    Name:"Onkar",
    Age:67,
    Degree:"CS",
    Collage:"ACTS"
  };
  constructor(){
    this.company="Transflower Online Flowers";
  }
  onControlChange():any{
    this.company="Apple";
    console.log("Event is invoked");
  }
}
