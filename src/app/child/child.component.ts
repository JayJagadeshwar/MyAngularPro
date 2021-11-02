import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() updateDataFromChild = new EventEmitter<string>();

  public emp: any[] = [
    {
      name: 'jay',
      id: 123,
      address: 'chintal',
    },
  ];

  counter: number = 0;

  incresaseCounter() {
    this.counter = this.counter + 1;
  }
  decreaseCounter() {
    this.counter = this.counter - 1;
  }

  constructor() {}

  ngOnInit(): void {
    this.updateDataFromChild.emit('asdfwqerqewtegf');
  }
}
