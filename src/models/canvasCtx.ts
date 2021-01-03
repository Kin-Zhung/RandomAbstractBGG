import { Component } from '@angular/core';


export class CanvasCtx{
  composition:String;
  lineWidth:number;
  lineJoin:String;

  constructor(){
    this.composition = 'source-over'
    this.lineWidth = 1;
    this.lineJoin ='bevel';
  }
}
