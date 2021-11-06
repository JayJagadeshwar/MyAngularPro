import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent implements OnInit {
  constructor() {}

  obsMsg!: string;
  videoSubscription!: Subscription;

  ngOnInit(): void {
    const broadCastVideo = interval(1000);

    this.videoSubscription = broadCastVideo.subscribe((res) => {
      this.obsMsg = 'Video' + res;

      if (res > 10) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}
