import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: item[] = [
    {name: 'One', val: 1},
    {name: 'Two', val: 2},
    {name: 'Three', val: 3}, 
    {name: 'Four', val: 4},
    {name: 'Five', val: 5}
  ];
    selectedValue1: string= 'One';
    selectedValue2: string= 'One';
    selectedValue3: string= 'One';
    selectedValue4: string= 'One';
}
class item {
  name!: string;
  val!: number;
}