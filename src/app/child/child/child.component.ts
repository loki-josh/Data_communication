import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() massage:any;
  @Output() massageEvent = new EventEmitter<any>();
  data:any;

  constructor() {

    this.data= "This massage is coming form child"

   }

  ngOnInit(): void {
  }

  sendMassage(){
    this.massageEvent.emit(this.data)
  }

}
