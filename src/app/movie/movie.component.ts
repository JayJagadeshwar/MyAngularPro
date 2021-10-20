import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

  constructor() { }
  show = false;
  ngOnInit(): void {
  }


  @Input() movtit !: string;

  msg !: string;
  msgs : string[] = ["hi","bye","hello"];

  EmployeesList = [
    { name: 'Tom', salary: '100', address: 'Malaysia' },
    { name: 'Harry', salary: '200', address: 'Afrika' },
    { name: 'Alex', salary: '300', address: 'America' },
    { name: 'Peter', salary: '400', address: 'China' },
  ]

  addMessages() : void{
      this.msgs.push(this.msg);
      console.log(this.msgs);
  }

  refresh(): void {
    this.EmployeesList = [
      { name: 'Tom', salary: '100', address: 'Malaysia' },
      { name: 'Harry', salary: '200', address: 'Afrika' },
      { name: 'Alex', salary: '300', address: 'America' },
      { name: 'Peter', salary: '400', address: 'China' },
      { name: 'Sam', salary: '500', address: 'India' },
      { name: 'John', salary: '600', address: 'England' },
    ]
  }

  refreshEmployees(index : number, employee : any) : string{
    return employee.name;
  }
  
  deleteFirstMessage() : void{
    this.msgs.splice(0,1);
  }

}
