import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-Data-communication';

  recieave:any ;

  massage_parent:any = "This data is coming form parent"

  recieaveMassage(event:any){
    this.recieave = event;
  }

}
