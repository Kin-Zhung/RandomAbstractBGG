import { Injectable } from "@angular/core";
import { Circle } from "src/models/circle";
import { RandGenService } from "src/models/generator.service";
import { CanvasService } from "../../canvas.service";

@Injectable()
export class CircleService{
  public numCircle:number = 1;
  public border:boolean = true;
  public fill:boolean = true;
  public rotation:boolean = false;
  public startAngle:number = 0;
  public endAngle:number =2 * Math.PI;
  public minRad:number = 25;
  public maxRad:number = 25;
  public circles:Circle[];
  constructor(private canvas:CanvasService, private genService:RandGenService){}

  genCircle(){
    this.circles = new Array(this.numCircle);
    for(let x = 0; x < this.numCircle; x++){
      let rad = this.genService.randInt(this.minRad, this.maxRad);
      let xCord = this.genService.randInt(0,this.canvas.getWidth());
      let yCord = this.genService.randInt(0,this.canvas.getHeight());


      let color = this.genService.randRGB();
      let c:Circle = new Circle(xCord,yCord,rad, this.startAngle,this.endAngle,this.border,this.fill,color);
      //console.log(r);
      this.circles[x] = c;
    }
  }
  drawCircle(canvas: CanvasRenderingContext2D){
    this.circles.map((c) =>{
      c.draw(canvas);
    })
  }
}

