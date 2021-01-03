import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SquareService } from './square.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  numSquare:number;
  border:boolean;
  fill:boolean;
  rotation:boolean;
  minLength;
  maxLength;
  fNumS = new FormControl(1, Validators.min(0));
  fMinLength = new FormControl(1, Validators.min(1));
  fMaxLength = new FormControl(1,Validators.min(1));
  constructor(private squareService:SquareService) { }

  ngOnInit(): void {
    this.border=this.squareService.border;
    this.numSquare = this.squareService.numSquare;
    this.fill = this.squareService.fill;
    this.rotation = this.squareService.rotation;
    this.minLength = this.squareService.minLength;
    this.maxLength = this.squareService.maxLength;

  }
  changeBorder(){
    this.squareService.border = this.border;
  }
  changeFill(){
    this.squareService.fill = this.fill;
  }
  changeRotation(){
    this.squareService.rotation = this.rotation;
  }
  changeNumSQ(){
    if(this.numSquare < 0){
      return;
    }
    this.squareService.numSquare = this.numSquare;
  }
  changeMinLength(){
    if (this.minLength < 1){
      return;
    }
    this.squareService.minLength = this.minLength;
  }
  changeMaxLength(){
    if (this.maxLength < 1 || this.maxLength < this.minLength){
      return;
    }
    this.squareService.maxLength = this.maxLength;
  }
  saveSquare(){
    this.squareService.border = this.border;
    this.squareService.numSquare = this.numSquare;
    this.squareService.fill = this.fill;
    this.squareService.rotation = this.rotation;
    this.squareService.minLength = this.minLength;
    this.squareService.maxLength = this.maxLength;
  }
}
