import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CircleService } from './circle.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  numCircle:number;
  border:boolean;
  fill:boolean;
  minRad;
  maxRad;
  fNumCirc = new FormControl(1,Validators.min(0));
  fMinRad = new FormControl(1,Validators.min(1));
  fMaxRad = new FormControl(1,Validators.min(1))
  constructor( private circleService:CircleService) { }

  ngOnInit(): void {
    this.numCircle = this.circleService.numCircle;
    this.border = this.circleService.border;
    this.fill = this.circleService.fill;
    this.minRad = this.circleService.minRad;
    this.maxRad = this.circleService.maxRad;
  }
  changeBorder(){
    this.circleService.border = this.border;
  }
  changeFill(){
    this.circleService.fill = this.fill;
  }
  changeNumCir(){
    if(this.numCircle < 0){
      return;
    }
    this.circleService.numCircle = this.numCircle;
  }
  changeMinRad(){
    if(this.minRad < 1){
      return;
    }
    this.circleService.minRad = this.minRad;
  }
  changeMaxRad(){
    if(this.maxRad < 1 || this.maxRad < this.minRad){
      return;
    }
    this.circleService.maxRad = this.maxRad;
  }

  saveCircle(){
    this.circleService.numCircle = this.numCircle;
    this.circleService.border = this.border;
    this.circleService.fill = this.fill;
    this.circleService.minRad = this.minRad;
    this.circleService.maxRad = this.maxRad;

  }

}
