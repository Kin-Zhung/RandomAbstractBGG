import { from } from "rxjs";

export class Triangle{
  public point1:{xCord:number, yCord:number};
  public point2:{xCord:number, yCord:number};
  public point3:{xCord:number, yCord:number};
  public width:number;
  public height:number;
  public border:boolean;
  public fill:boolean;
  public color:string;
  public rotate:boolean;
  public degree:number;

  constructor(point1:{xCord:number, yCord:number},point2:{xCord:number, yCord:number},point3:{xCord:number, yCord:number},width:number,height:number, border:boolean, fill:boolean, color:string,rotate:boolean, degree:number){
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
    this.width = width;
    this.height = height;
    this.border = border;
    this.fill = fill;
    this.color = color;
    this.rotate = rotate;
    this.degree = degree;
  }

  draw(canvas:CanvasRenderingContext2D){
    if(this.rotate){
      canvas.rotate(this.degree);
    }
    if(this.border){
      canvas.beginPath();
      canvas.moveTo(this.point1.xCord, this.point1.yCord);
      canvas.lineTo(this.point2.xCord, this.point2.yCord);
      canvas.lineTo(this.point3.xCord, this.point3.yCord);
      canvas.closePath();
      canvas.stroke();
    }
    if(this.fill){
      canvas.beginPath();
      canvas.moveTo(this.point1.xCord, this.point1.yCord);
      canvas.lineTo(this.point2.xCord, this.point2.yCord);
      canvas.lineTo(this.point3.xCord, this.point3.yCord);
      canvas.fillStyle = this.color;
      canvas.fill();
    }
    canvas.setTransform(1, 0, 0, 1, 0, 0);

  }

}
