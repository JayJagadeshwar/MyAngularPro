import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css'],
})
export class FormEventComponent implements OnInit {
  @ViewChild('addBtn') addBtn!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      console.log(res);
    });
  }
}
