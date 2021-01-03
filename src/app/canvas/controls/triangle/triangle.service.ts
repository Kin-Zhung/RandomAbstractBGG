import { Injectable } from "@angular/core";
import { RandGenService } from "src/models/generator.service";
import { Triangle } from "src/models/triangle";
import { CanvasService } from "../../canvas.service";

@Injectable()
export class TriangleService{

  public border:boolean = true;
  public fill:boolean = true;
  public rotation:boolean = false;
  public numTriangle:number = 1;
  public minWidth:number = 50;
  public minHeight:number = 50;
  public maxWidth:number = 50;
  public maxHeight:number = 50;
  public triangles: Triangle[];

  constructor(private canvas:CanvasService, private genService:RandGenService){}

  genTriangle(){
    this.triangles = new Array(this.numTriangle);
    for(let x = 0; x < this.triangles.length; x++){
      let width = this.genService.randInt(this.minWidth, this.maxWidth);
      let height = this.genService.randInt(this.minHeight, this.maxHeight);
      let xCord:number = this.genService.randInt(0,this.canvas.getWidth()) - width;
      let yCord:number = this.genService.randInt(0,this.canvas.getHeight())-height;
      while(xCord + width >this.canvas.getWidth() || xCord < 0 || yCord - height  < 0 || yCord > this.canvas.getHeight()){
        xCord = this.genService.randInt(0,this.canvas.getWidth()) ;
        yCord = this.genService.randInt(0,this.canvas.getHeight());
      }
      let xCord1:number = xCord + width;
      let yCord1:number = yCord;
      let xCord2:number = xCord + width / 2;
      let yCord2:number = yCord - height;
      let rDegree = this.genService.randInt(1,180) * (Math.PI/180)
      let color = this.genService.randRGB();
      let t:Triangle = new Triangle({'xCord':xCord,'yCord':yCord},{'xCord':xCord1,'yCord':yCord1},{'xCord':xCord2,'yCord':yCord2},width,height,this.border,this.fill,color,this.rotation,rDegree);
      //console.log(r);
      this.triangles[x] = t;
    }
  }
  drawTriangle(canvas:CanvasRenderingContext2D){
    this.triangles.map((t)=>{
      t.draw(canvas);
    });
  }

}
