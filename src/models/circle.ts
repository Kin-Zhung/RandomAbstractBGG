export class Circle{
  public xCord:number;
  public yCord:number;
  public radius:number;
  public startAngle:number;
  public endAngle:number;
  public border:boolean;
  public fill:boolean;
  public color:string;

  constructor(xCord:number, yCord:number, radius:number,  startAngle:number,endAngle:number, border:boolean, fill:boolean, color:string ){
    this.xCord = xCord;
    this.yCord = yCord;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.border = border;
    this.fill = fill;
    this.color = color;
  }

  draw(canvas:CanvasRenderingContext2D){
    if(this.border){
      canvas.beginPath();
      canvas.arc(this.xCord, this.yCord, this.radius, this.startAngle, this.endAngle * Math.PI);
      canvas.stroke();
    }
    if(this.fill){
      canvas.beginPath();
      canvas.arc(this.xCord, this.yCord, this.radius, this.startAngle, this.endAngle * Math.PI);
      canvas.fillStyle = this.color;
      canvas.fill();
    }
  }
}
