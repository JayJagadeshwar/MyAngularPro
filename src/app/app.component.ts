import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular from parent app component';

  movidTitle = 'Fast and Furious';  

  data = 'x';

  updateData(str : string){
    this.data = str;
  }


}
