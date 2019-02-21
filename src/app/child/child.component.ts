import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() PData: number; //data source bound in template [] and assigned data
  @Output() childEvent = new EventEmitter(); //store the eventEmitter
  constructor() { }
  onChange(value) {
    this.childEvent.emit(value);
  }

  ngOnInit() {
  }

}
