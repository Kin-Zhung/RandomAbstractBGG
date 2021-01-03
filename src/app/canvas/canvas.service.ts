export class CanvasService{
  private ctx:CanvasRenderingContext2D;
  private imgData:ImageData = null;
  private autoLoad:boolean = true;
  getAuto(){
    return this.autoLoad;
  }
  setAuto(b:boolean){
    this.autoLoad = b;

  }
  setImg(img:ImageData){
    this.imgData = img;
  }
  getImg(){
    return this.imgData;
  }
  getCtx(){
    return this.ctx;
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
  setCtx(c:CanvasRenderingContext2D){
    this.ctx = c;
  }
  getWidth(){
    return this.ctx.canvas.width;
  }
  getHeight(){
    return this.ctx.canvas.height;
  }
}
