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

    this.getData().then((data) => console.log(data));

    console.log('/////////--Async and Await--/////////////////');
    this.getDetails();
  }

  async getData() {
    return 'Data Received from async function';
  }

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('employee details returned');
    }, 3000);
  });

  async getDetails() {
    let response = await this.promise;
    console.log(response);
  }


  ////////////////USING PROMISE//////////////////////////////////////////////////////////////////

  Dell : Object = {
    Company : 'Dell Laptop',
    Ram : '8GB',
    Storage : '120 GB',
    Price : '50000'
  }

  getLaptop = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(this.Dell);
    }, 5000);
  })

  resultTag : any = "";

  changeText(){
    this.resultTag = "Fetching...";

    this.getLaptop.then(res => {
      this.resultTag = JSON.stringify(res);
    })
  }
}
