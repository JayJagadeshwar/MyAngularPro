import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})



export class CoreComponent implements OnInit {

  serverStatus = 'offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit(): void {
  }

  value="";
  clearValue() {
  this.value="";
 }

 getServerStatus(){
    return this.serverStatus;
 }

 getColor(){
   return this.serverStatus === 'online' ? 'green' : 'red';
 }

 movies : Movie[]= [
   {title : 'Rangam',Actor : 'Jeeva',Actress : 'Keerthi'},
   {title : 'Rangastalam',Actor : 'Ram',Actress : 'sam'},
   {title : 'Arya',Actor : 'Arjun',Actress : 'Kajal'},
 ]
   
 employees = [
  {
    name: "Rahul", email: "rahul@gmail.com",
    skills: [{ skill: 'Angular', exp: '2' },{ skill: 'Javascript', exp: '7' },{ skill: 'TypeScript', exp: '3' }
    ]
  },
  {
    name: "Sachin", email: "sachin@gmail.com",
    skills: [{ skill: 'Angular', exp: '1' },{ skill: 'Android', exp: '3' },{ skill: 'React', exp: '2' }
    ]
  },
  {
    name: "Laxmna", email: "laxman@gmail.com",
    skills: [{ skill: 'HTML', exp: '2' },{ skill: 'CSS', exp: '2' },{ skill: 'Javascript', exp: '1' }
    ]
  }
]

}

class Movie{
  title !: string;
  Actor !: string;
  Actress !: string;
}
