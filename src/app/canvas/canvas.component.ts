import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Drawer } from './drawer';
import {MatAccordion} from '@angular/material/expansion';
import { CanvasService } from './canvas.service';
import { Rectangle } from 'src/models/rectangle';
import { Circle } from 'src/models/circle';
import { Triangle } from 'src/models/triangle';
import { RectangleService } from './controls/rectangle/rectangle.service';
import { TriangleService } from './controls/triangle/triangle.service';
import { SquareService } from './controls/square/square.service';
import { CircleService } from './controls/circle/circle.service';
import { GeneralService } from './controls/general/general.service';
import { RandGenService } from 'src/models/generator.service';



@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers:[RectangleService,TriangleService,SquareService,CircleService]
})
export class CanvasComponent implements OnInit {
  constructor( private canvasService: CanvasService, private rectService: RectangleService,private squareService:SquareService,private triangleService:TriangleService,private circleService:CircleService,private randService:RandGenService,) { }
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('download') link: ElementRef<HTMLLinkElement>
  ctx: CanvasRenderingContext2D;
  selectedOption:String;
  public drawer;
  public imgdata;
  dHref:String ="";
  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.canvasService.setCtx(this.canvas.nativeElement.getContext('2d'));
    this.selectedOption = 'general'
  }
  ngAfterViewInit():void {
    // this.drawer = new Drawer(this.ctx,this.ctx.canvas.width,this.ctx.canvas.height);
    // this.ctx.imageSmoothingQuality = 'high';
    // this.ctx.strokeStyle = 'white';
    // console.log(this.ctx.canvas.width,this.ctx.canvas.height)
  }

  changeComposite($event){
    this.drawer.changeComposite($event);
    this.drawer.clear();
    console.log($event);
  }
  changeLineWidth($event){
    this.ctx.lineWidth = $event;
    console.log($event);
  }
  gradBG(){
    this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
    let x = Math.floor((Math.random() * this.ctx.canvas.width));
    let y = Math.floor((Math.random() * this.ctx.canvas.height));
    let width =0;
    let height = 0;
    while (width == 0 && height == 0 || width == height){
      width = Math.floor((Math.random() * this.ctx.canvas.width));
      height =Math.floor((Math.random() * this.ctx.canvas.height));
    }
    let lingrad = this.ctx.createLinearGradient(x,y,width,height);

     lingrad.addColorStop(0.5,this.randService.randHex());
     lingrad.addColorStop(1,this.randService.randHex());
     this.ctx.fillStyle = lingrad;

    this.ctx.lineCap = 'round'
    this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);

  }
  solidBG(){
    this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);

    let width =0;
    let height = 0;
    while (width == 0 && height == 0 || width == height){
      width = Math.floor((Math.random() * this.ctx.canvas.width));
      height =Math.floor((Math.random() * this.ctx.canvas.height));
    }
    this.ctx.fillStyle = this.randService.randRGB();
    this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);

  }
  clear(){

    const c = this.canvasService.getCtx();
    c.clearRect(0,0,c.canvas.width,c.canvas.height);
  }
  genRect(){
    if(this.canvasService.getAuto()){
      this.loadImg();
      this.rectService.genRect();
      this.rectService.drawRect(this.ctx);
      return;
    }
    this.rectService.genRect();
    this.rectService.drawRect(this.ctx);

  }
  genSquare(){
    if(this.canvasService.getAuto()){
      this.loadImg();
      this.squareService.genSquare();
      this.squareService.drawSquare(this.ctx);
      return;
    }
    this.squareService.genSquare();
    this.squareService.drawSquare(this.ctx);

  }
  genCircle(){
    if(this.canvasService.getAuto()){
      this.loadImg();
      this.circleService.genCircle();
      this.circleService.drawCircle(this.ctx);
      return;
    }
    this.circleService.genCircle();
    this.circleService.drawCircle(this.ctx);
  }
  genTriangle(){
    if(this.canvasService.getAuto()){
      this.loadImg();
      this.triangleService.genTriangle();
      this.triangleService.drawTriangle(this.ctx);
      return;
    }
    this.triangleService.genTriangle();
    this.triangleService.drawTriangle(this.ctx);
  }
  saveImg(){
    let img = this.ctx.getImageData(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
    console.log(img);
    this.canvasService.setImg(img);
  }
  loadImg(){
    let img = this.canvasService.getImg();
    if(img == null){
      return;
    }
    this.ctx.putImageData(img,0,0);
  }
  download(){
    const a = document.createElement('a');
    a.href = this.ctx.canvas.toDataURL();
    a.download ="img";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
