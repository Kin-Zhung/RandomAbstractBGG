import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CanvasService } from '../../canvas.service';
import { RectangleService } from './rectangle.service';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
  numRect:number;
  border:boolean;
  fill:boolean;
  rotation:boolean;
  minWidth;
  minHeight;
  maxWidth;
  maxHeight;
  fNumRect = new FormControl(1, Validators.min(0));
  fMinWidth = new FormControl(1, Validators.min(1));
  fMinHeight = new FormControl(1, Validators.min(1));
  fMaxWidth = new FormControl(1, Validators.min(1));
  fMaxHeight = new FormControl(1, Validators.min(1));
  constructor( private rectService: RectangleService) { }

  ngOnInit(): void {
    this.border=this.rectService.border;
    this.numRect = this.rectService.numRect;
    this.fill = this.rectService.fill;
    this.rotation = this.rectService.rotation;
    this.minWidth = this.rectService.minWidth;
    this.minHeight = this.rectService.minHeight;
    this.maxWidth = this.rectService.maxWidth;
    this.maxHeight = this.rectService.maxHeight;

  }
  changeBorder(){
    this.rectService.border = this.border;
  }
  changeFill(){
    console.log(this.fill)
    this.rectService.fill = this.fill;
  }
  changeRotation(){
    this.rectService.rotation = this.rotation;
  }
  changeNumRec(){
    if(this.numRect < 0){
      return;
    }
    this.rectService.numRect = this.numRect;
  }
  changeMinWidth(){
    if(this.minWidth < 1){
      return
    }
    this.rectService.minWidth = this.minWidth;
  }
  changeMaxWidth(){
    if(this.maxWidth < 1 || this.maxWidth < this.minWidth){
      return;
    }
    this.rectService.maxWidth = this.maxWidth;
  }
  changeMinHeight(){
    if(this.minHeight < 1  ){
      return;
    }
    this.rectService.minHeight = this.minHeight;
  }
  changeMaxHeight(){
    if (this.maxHeight < 1 || this.maxHeight < this.minHeight){
      return;
    }
    this.rectService.maxHeight = this.maxHeight;
  }

  saveRect(){
    this.rectService.border = this.border;
    this.rectService.numRect = this.numRect;
    this.rectService.fill = this.fill;
    this.rectService.rotation = this.rotation;
    this.rectService.minWidth = this.minWidth;
    this.rectService.minHeight = this.minHeight;
    this.rectService.maxWidth = this.maxWidth;
    this.rectService.maxHeight = this.maxHeight;
  }


}
