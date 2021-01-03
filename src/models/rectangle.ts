import { CONTEXT_NAME } from "@angular/compiler/src/render3/view/util";
import { Shape } from "./shape";

export class Rectangle{
  public xCord:number;
  public yCord:number;
  public height:number;
  public width:number;
  public border:boolean;
  public fill:boolean;
  public color:string;
  public rotate:boolean
  public degree:number

  constructor(xCord:number, yCord:number,  width:number,height:number, border:boolean, fill:boolean, color:string,rotate:boolean,degree:number ){
    this.xCord = xCord;
    this.yCord = yCord;
    this.height = height;
    this.width = width;
    this.border = border;
    this.fill = fill;
    this.color = color;
    this.rotate = rotate;
    this.degree =degree;
  }

  draw(canvas:CanvasRenderingContext2D){

    if(this.rotate){
      console.log(this.xCord,this.yCord,this.width,this.height)
      //canvas.translate((this.xCord + (0.5 * this.width)),(this.yCord + (0.5 * this.height)));
      console.log(this.degree);
      canvas.rotate(this.degree);
    }
    if(this.border){
      console.log(this.height,this.width,this.xCord,this.yCord)
      canvas.strokeRect(this.xCord,this.yCord,this.width,this.height);
    }
    if(this.fill){

      canvas.fillStyle = this.color;
      canvas.fillRect(this.xCord,this.yCord,this.width,this.height);
    }

    canvas.setTransform(1, 0, 0, 1, 0, 0);

  }


}
