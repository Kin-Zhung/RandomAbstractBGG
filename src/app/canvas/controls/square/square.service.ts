import { Injectable } from "@angular/core";
import { RandGenService } from "src/models/generator.service";
import { Square } from "src/models/square";
import { CanvasService } from "../../canvas.service";

@Injectable()
export class SquareService{
  public border:boolean = true;
  public fill:boolean = true;
  public rotation:boolean = false;
  public numSquare:number = 1;
  public minLength:number = 50;
  public maxLength:number = 50;
  public squares: Square[];

  constructor(private canvas:CanvasService, private genService:RandGenService){}

  genSquare(){
    this.squares = new Array(this.numSquare);
    for(let x = 0; x < this.numSquare; x++){
      let length = this.genService.randInt(this.minLength, this.maxLength);
      let xCord = this.genService.randInt(0,this.canvas.getWidth()) - length;
      let yCord = this.genService.randInt(0,this.canvas.getHeight()) -length;
      while(xCord + length >this.canvas.getWidth() || xCord < 0 || yCord+length  > this.canvas.getHeight() || yCord < 0){
        xCord = this.genService.randInt(0,this.canvas.getWidth()) - length;
        yCord = this.genService.randInt(0,this.canvas.getHeight())- length;
      }

      let rDegree = this.genService.randInt(1,180) * (Math.PI/180)
      let color = this.genService.randRGB();
      let s:Square = new Square(xCord,yCord,length,this.border,this.fill,color,this.rotation,rDegree);
      //console.log(r);
      this.squares[x] = s;
    }
  }

  drawSquare(canvas:CanvasRenderingContext2D){

    this.squares.map((s)=>{
      s.draw(canvas);
    })

  }


}
