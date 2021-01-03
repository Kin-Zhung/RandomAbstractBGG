import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CanvasService } from '../../canvas.service';
import { Drawer } from '../../drawer';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private canvasService:CanvasService){}
  @Input() ctx:Drawer;
  @Output() ctxComposit = new EventEmitter<String>();
  @Output() ctxLineWidth = new EventEmitter<number>();



  canvasComposite:string;
  lineWidth:number;
  bColor;
  autoLoad:boolean;
  lwVal = new FormControl(1, Validators.min(1));
  ngOnInit(){
    this.canvasComposite = this.canvasService.getComposite();
    this.lineWidth = this.canvasService.getLineWidth();
    this.bColor= this.canvasService.getStrokeStyle();
    console.log(this.bColor);
    this.autoLoad = this.canvasService.getAuto();


  }

  compositeChange(){
    this.canvasService.setComposite(this.canvasComposite);
    this.ctxComposit.emit(this.canvasComposite);
  }
  lineWidthChange(){

    this.canvasService.setLineWidth(this.lineWidth);
    console.log(this.lineWidth);
  }
  bColorChange($event){
    this.canvasService.setStrokeStyle($event);
    console.log($event);
  }
  changeAutoLoad(){
    this.canvasService.setAuto(this.autoLoad);
  }
}
