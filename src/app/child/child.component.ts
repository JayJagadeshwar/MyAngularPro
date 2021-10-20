import { Component, OnInit, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {



  @Output() updateDataFromChild = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
    this.updateDataFromChild.emit("asdfwqerqewtegf");
  }

}
