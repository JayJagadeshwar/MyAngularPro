import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter-rxjs-ex',
  templateUrl: './filter-rxjs-ex.component.html',
  styleUrls: ['./filter-rxjs-ex.component.css'],
})
export class FilterRxjsExComponent implements OnInit {
  constructor() {}

  stuData = [
    { name: 'jay', id: 1, Gender: 'Male', Branch: 'Ece' },
    { name: 'shiva', id: 2, Gender: 'Male', Branch: 'Ece' },
    { name: 'ajay', id: 3, Gender: 'Male', Branch: 'Ece' },
    { name: 'hari', id: 4, Gender: 'Male', Branch: 'Ece' },
    { name: 'priya', id: 5, Gender: 'Female', Branch: 'Ece' },
    { name: 'sai', id: 6, Gender: 'Male', Branch: 'Ece' },
    { name: 'navya', id: 7, Gender: 'Female', Branch: 'Ece' },
    { name: 'mallika', id: 8, Gender: 'Female', Branch: 'Ece' },
    { name: 'janani', id: 9, Gender: 'Female', Branch: 'Ece' },
    { name: 'jayanth', id: 10, Gender: 'Male', Branch: 'Ece' },
    { name: 'harshitha', id: 11, Gender: 'Female', Branch: 'Ece' },
  ];

  ngOnInit(): void {
    const source = from(this.stuData);

    source
      .pipe(
        filter((member) => member.Gender == 'Male'),
        toArray()
      )
      .subscribe((res) => console.log('Only male data : ', res));

    source
      .pipe(
        filter((member) => member.Gender == 'Female'),
        toArray()
      )
      .subscribe((res) => console.log('Only female data : ', res));
  }
}
