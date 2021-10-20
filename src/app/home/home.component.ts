import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //template:`<h1>New Home template diclaration</h1>`,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit{

  constructor(){
    setTimeout(() => {
      this.isdisabled = false;
    },2000);
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  @Input() name11!: string;

  name : string = 'Jay Jagadeshwar';
  isdisabled : boolean = true;
  //tit = 'asdf';

  Company : string= 'Jnet Technologies';

  


  getMessage(data : number) : string{

    if(data === 1){
      return 'Hello, this is string message, using interpolation';
    }else{
      return 'failed to fetch data with id 1';
    }
  }

  employee = {
    name : 'Vineeth',
    designation : 'Trainer',
    id : 102
  }

  //const empObj : employee = new employee();

  clickSave(){
    this.name = 'Name Changed';
  }

 
}
