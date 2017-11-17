import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TTD TODO app';
  items = [];
  add = function(value){
    this.items.push(value);
  };
  constructor() {
    this.items = ['Test', 'Execute', 'Refactor'];
  }
}
