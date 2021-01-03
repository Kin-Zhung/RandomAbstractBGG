import { Component, EventEmitter,  Input,  OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() cColor:string;
  public hue: string
  public color: string;
  @Output() borderColor = new EventEmitter();
  constructor() { }


  ngOnInit(): void {
    this.color =this.cColor;
  }

  colorChanged($event){
    this.color = $event;
    this.borderColor.emit($event);
  }

}
