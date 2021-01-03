import { Injectable } from "@angular/core";
import { RandGenService } from "src/models/generator.service";
import { Rectangle } from "src/models/rectangle";
import { CanvasService } from "../../canvas.service";

@Injectable()
export class RectangleService{
  public border:boolean = true;
  public fill:boolean = true;
  public rotation:boolean = false;
  public numRect:number = 1;
  public minWidth:number = 100;
  public minHeight:number = 50;
  public maxWidth:number = 100;
  public maxHeight:number = 50;
  public rectangles: Rectangle[];

  constructor(private canvas:CanvasService, private genService:RandGenService){}

  genRect(){
    this.rectangles = new Array(this.numRect);
    for(let x = 0; x < this.numRect; x++){
      let width = this.genService.randInt(this.minWidth, this.maxWidth);
      let height = this.genService.randInt(this.minHeight, this.maxHeight);
      let xCord = this.genService.randInt(0,this.canvas.getWidth()) - width;
      let yCord = this.genService.randInt(0,this.canvas.getHeight())-height;
      while(xCord + width >this.canvas.getWidth() || xCord < 0 || yCord+height  > this.canvas.getHeight() || yCord < 0){
        xCord = this.genService.randInt(0,this.canvas.getWidth()) - width;
        yCord = this.genService.randInt(0,this.canvas.getHeight())-height;
      }

      let rDegree = this.genService.randInt(1,180) * (Math.PI/180)
      let color = this.genService.randRGB();
      let r:Rectangle = new Rectangle(xCord,yCord,width,height,this.border,this.fill,color,this.rotation,rDegree);
      //console.log(r);
      this.rectangles[x] = r;
    }
  }

  drawRect(canvas:CanvasRenderingContext2D){
    // for( let x = 0; x < this.rectangles.length; x++){
    //   console.log(this.rectangles[x])
    //   this.rectangles[x].draw(canvas);
    // }
    this.rectangles.map((r)=>{
      r.draw(canvas);
    })

  }


}
