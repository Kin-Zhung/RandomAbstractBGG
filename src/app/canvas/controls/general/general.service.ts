
export class GeneralService{
  private ctx:CanvasRenderingContext2D;

  setCtx(c:CanvasRenderingContext2D){
    this.ctx = c;
  }
  getComposite(){
    return this.ctx.globalCompositeOperation;
  }
  getLineWidth(){
    return this.ctx.lineWidth;
  }
  getStrokeStyle(){
    return this.ctx.strokeStyle;
  }
  setComposite(composite:string){
    this.ctx.globalCompositeOperation = composite;
  }
  setLineWidth(lineWidth:number){
    this.ctx.lineWidth = lineWidth;
  }
  setStrokeStyle(color:string){
    this.ctx.strokeStyle = color;
  }
}
