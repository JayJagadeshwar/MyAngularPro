import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises-ex',
  templateUrl: './promises-ex.component.html',
  styleUrls: ['./promises-ex.component.css'],
})
export class PromisesExComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let ordered = new Promise((resolve, rejects) => {
      resolve('ordered success');
    });

    ordered.then((res) => {
      console.log('Successfully ordered', res);
    });
  }
}
