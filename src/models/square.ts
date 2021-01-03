export class Square{
  public xCord:number;
  public yCord:number;
  public length:number;
  public border:boolean;
  public fill:boolean;
  public color:string;
  public rotate:boolean;
  public degree:number;

  constructor(xCord:number, yCord:number, length:number, border:boolean, fill:boolean, color:string, rotate:boolean, degree:number ){
    this.xCord = xCord;
    this.yCord = yCord;
    this.length = length;
    this.border = border;
    this.fill = fill;
    this.color = color;
    this.rotate = rotate;
    this.degree = degree;
  }

  draw(canvas:CanvasRenderingContext2D){
    if(this.rotate){
      //canvas.translate((this.xCord+this.length)/2,(this.yCord+this.length)/2);
      canvas.rotate(this.degree);
    }
    if(this.border){
      canvas.strokeRect(this.xCord,this.yCord,this.length,this.length);
    }
    if(this.fill){
      canvas.fillStyle = this.color;
      canvas.fillRect(this.xCord,this.yCord,this.length,this.length);
    }
    if(this.rotate){
      canvas.setTransform(1, 0, 0, 1, 0, 0);
     }
  }
}
