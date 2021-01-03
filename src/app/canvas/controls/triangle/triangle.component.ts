import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TriangleService } from './triangle.service';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

  numTri:number;
  border:boolean;
  fill:boolean;
  rotation:boolean;
  minWidth:number;
  minHeight:number;
  maxWidth:number;
  maxHeight:number;
  fNumT = new FormControl(1, Validators.min(0));
  fMinW = new FormControl(1, Validators.min(1));
  fMinH = new FormControl(1, Validators.min(1));
  fMaxW = new FormControl(1, Validators.min(1));
  fMaxH = new FormControl(1, Validators.min(1));
  constructor( private triangleService:TriangleService) { }

  ngOnInit(): void {
    this.border=this.triangleService.border;
    this.numTri = this.triangleService.numTriangle;
    this.fill = this.triangleService.fill;
    this.rotation = this.triangleService.rotation;
    this.minWidth = this.triangleService.minWidth;
    this.minHeight = this.triangleService.minHeight;
    this.maxWidth = this.triangleService.maxHeight;
    this.maxHeight = this.triangleService.maxHeight;

  }
  changeBorder(){
    this.triangleService.border = this.border;
  }
  changeFill(){
    this.triangleService.fill = this.fill;
  }
  changeRotation(){
    this.triangleService.rotation = this.rotation;
  }
  changeNumTri(){
    if (this.numTri < 0){
      return;
    }
    this.triangleService.numTriangle = this.numTri;
  }
  changeMinWidth(){
    if (this.minWidth < 1){
      return;
    }
    this.triangleService.minWidth = this.minWidth;
  }
  changeMaxWidth(){
    if (this.maxWidth < 1 || this.maxWidth < this.minWidth){
      return;
    }
    this.triangleService.maxWidth = this.maxWidth;
  }
  changeMinHeight(){
    if(this.minHeight < 1){
      return;
    }
    this.triangleService.minHeight = this.minHeight;
  }
  changeMaxHeight(){
    if(this.maxHeight < 1 || this.maxHeight < this.minHeight){
      return;
    }
    this.triangleService.maxHeight = this.maxHeight;
  }
  saveTri(){
    this.triangleService.border = this.border;
    this.triangleService.numTriangle = this.numTri;
    this.triangleService.fill = this.fill;
    this.triangleService.rotation = this.rotation;
    this.triangleService.minWidth = this.minWidth;
    this.triangleService.minHeight = this.minHeight;
    this.triangleService.maxWidth = this.maxWidth;
    this.triangleService.maxHeight = this.maxHeight;
  }


}
