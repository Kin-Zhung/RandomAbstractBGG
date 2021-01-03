import { Component } from '@angular/core';

export class Drawer{
  canvas: CanvasRenderingContext2D;
  lineWidth: number;
  w:number;
  h:number;
  radient:Boolean = true;


  constructor (private ctx: CanvasRenderingContext2D, private width, private height){
    this.canvas = ctx;
    this.w = width;
    this.h = height;
  }

  clear(){
    this.ctx.clearRect(0,0,this.w,this.h)
  }

  changeComposite(composite:string){
    this.canvas.globalCompositeOperation = composite;
  }
  changeLineWidth(lw:number){
    this.canvas.lineWidth = lw;
    console.log(this.canvas.lineWidth);
  }
  changeBorderColor(bColor:string){
    this.canvas.strokeStyle = bColor;
  }
  getComposite(){
    return this.canvas.globalCompositeOperation;
  }
  getLineWidth(){
    return this.canvas.lineWidth;
  }
  getBorderColor(){
    return this.canvas.strokeStyle.toString();
  }
  fillBackground(){
    this.canvas.clearRect(0,0,this.w,this.h);
    let x = Math.floor((Math.random() * this.width));
    let y = Math.floor((Math.random() * this.height));
    let width =0;
    let height = 0;
    while (width == 0 && height == 0 || width == height){
      width = Math.floor((Math.random() * this.width));
      height =Math.floor((Math.random() * this.height));
    }
    let lingrad = this.ctx.createLinearGradient(x,y,width,height);
    // let w1 = Math.floor((Math.random() * this.width));
    // let w2 = (w1*2) - ((this.w - w1)/2)
    // let lingrad = this.ctx.createRadialGradient(Math.floor((Math.random() * this.width)),Math.floor((Math.random() * this.width)),w1,Math.floor((Math.random() * this.width)),Math.floor((Math.random() * this.width)),w2)
    // console.log(lingrad)
    // lingrad.addColorStop(0.3,this.randHex());
     lingrad.addColorStop(0.5,this.randHex());
     lingrad.addColorStop(1,this.randHex());
     this.ctx.fillStyle = lingrad;
    //this.ctx.fillStyle = this.randRGB();
    this.ctx.lineCap = 'round'

    // if(x+width < this.width && y+height < this.height){
    //   this.ctx.fillRect(x-width,y-height,width,height);
    //   return;
    // }
    this.ctx.fillRect(0,0,this.w,this.h);
  }
  gradientBackground(){
    this.ctx.clearRect(0,0,this.w,this.h);
    let x = Math.floor((Math.random() * this.width));
    let y = Math.floor((Math.random() * this.height));
    let width =0;
    let height = 0;
    while (width == 0 && height == 0 || width == height){
      width = Math.floor((Math.random() * this.width));
      height =Math.floor((Math.random() * this.height));
    }
    let lingrad = this.ctx.createLinearGradient(x,y,width,height);
    let grad1 = '';
    let grad2 ='';
    let r: number = Math.floor((Math.random() * 255));
    let g: number = Math.floor((Math.random() * 255));
    let b: number = Math.floor((Math.random() * 255));
    lingrad.addColorStop(0.5,this.RGBToHex(r,g,b))
    if( r > g && r >  b){
      lingrad.addColorStop(1,this.RGBToHex(r,Math.floor((Math.random() * 255)),Math.floor((Math.random() * 255))));
    }else if ( g > r && g > b){
      lingrad.addColorStop(1,this.RGBToHex(Math.floor((Math.random() * 255)),g,Math.floor((Math.random() * 255))));
    }else{
      lingrad.addColorStop(1,this.RGBToHex(Math.floor((Math.random() * 255)),Math.floor((Math.random() * 255)),b));
    }

    this.ctx.fillStyle = lingrad;
    this.ctx.lineCap = 'round'
    this.ctx.fillRect(0,0,this.w,this.h);
  }

  drawRect(rectnumber: number, rectFill: boolean, rectBorder: boolean, rectMinW:number,rectMinH:number,rectMaxW:number,rectMaxH:number, rectColors:[]  ){
    if (rectnumber == 0){
        return
      }else{
        for(let z = 0; z < rectnumber; z++){
          let width = this.randInt(rectMinW,rectMaxW)
          let height =  this.randInt(rectMinH,rectMaxH)
          console.log(width,height);
          if(rectColors[z] == null || rectColors == null){
            let x = 0;
            let y = 0;
            while (x == 0 && y == 0 || x == y){
              x = this.randInt(0,this.w);
              y = this.randInt(0,this.h);
              console.log (x,y);
            }
            if(x+width < this.w && y+height < this.h){
              if(rectBorder){
                this.ctx.strokeRect(x-width,y-height,width,height);
              }
              if(rectFill){
                this.ctx.fillStyle = this.randRGB()
                this.ctx.fillRect(x-width,y-height,width,height)
              }
            }else{
              if(rectBorder){
                this.ctx.strokeRect(x,y,width,height);
              }
              if(rectFill){
                this.ctx.fillStyle = this.randRGB()
                this.ctx.fillRect(x,y,width,height)
              }
            }
          }else{
            let x = 0;
            let y = 0;
            while (x == 0 && y == 0 || x == y){
              x = this.randInt(0,this.w);
              y = this.randInt(0,this.h);
            }
            if(x+width < this.w && y+height < this.h){
              if(rectBorder){
                this.ctx.strokeRect(x-width,y-height,width,height);
              }
              if(rectFill){
                console.log(rectColors[z])
                this.ctx.fillStyle = rectColors[z];
                this.ctx.fillRect(x-width,y-height,width,height);
              }
            }else{
              if(rectBorder){
                this.ctx.strokeRect(x,y,width,height);
              }
              if(rectFill){
                console.log(rectColors[z])
                this.ctx.fillStyle = rectColors[z];
                this.ctx.fillRect(x,y,width,height);
              }
            }
          }
        }
      }
    }



  drawSquare(snumber: number, sFill: boolean, sBorder: boolean, sMinL:number,sMaxL:number, sColors:[]  ){
      if (snumber == 0){
          return
        }else{
          for(let z = 0; z < snumber; z++){
            let length = Math.floor((Math.random() * sMaxL)+ sMinL);
            if(sColors[z] == null || sColors == null){
              let x = 0;
              let y = 0;
              while (x == 0 && y == 0 || x == y){
                x = this.randInt(0,this.w);
                y = this.randInt(0,this.h);
                console.log (x,y);
              }
              if(x+length < this.w && y+length < this.h){
                if(sBorder){
                  this.canvas.strokeRect(x-length,y-length,length,length);
                }
                if(sFill){
                  this.canvas.fillStyle = this.randRGB()
                  this.canvas.fillRect(x-length,y-length,length,length)
                }
              }else{
                if(sBorder){
                  this.canvas.strokeRect(x,y,length,length);
                }
                if(sFill){
                  this.canvas.fillStyle = this.randRGB()
                  this.canvas.fillRect(x,y,length,length)
                }
              }
            }else{
              let x = 0;
              let y = 0;
              while (x == 0 && y == 0 || x == y){
                x = this.randInt(0,this.w);
                y = this.randInt(0,this.h);
              }
              if(x+length < this.w && y+length < this.h){
                if(sBorder){
                  this.canvas.strokeRect(x-length,y-length,length,length);
                }
                if(sFill){
                  console.log(sColors[z])
                  this.canvas.fillStyle = sColors[z];
                  this.canvas.fillRect(x-length,y-length,length,length);
                }
              }else{
                if(sBorder){
                  this.canvas.strokeRect(x,y,length,length);
                }
                if(sFill){
                  console.log(sColors[z])
                  this.canvas.fillStyle = sColors[z];
                  this.canvas.fillRect(x,y,length,length);
                }
              }
            }
          }
        }
    }




    drawCircle(cnumber: number, cFill: boolean, cBorder: boolean, cMinR:number,cMaxR:number, cColors:[]  ){
      let startAngle = 0;
      let endAngle = 2 * Math.PI;
      if (cnumber == 0){
          return
        }else{
          for(let z = 0; z < cnumber; z++){
            let radius = Math.floor((Math.random() * cMaxR)+ cMinR);
            let x = this.randInt(0,this.w);
            let y = this.randInt(0,this.h);
            if(cColors[z] == null || cColors == null){
                if(cBorder){
                  this.ctx.beginPath();
                  this.ctx.arc(x,y,radius,startAngle,endAngle);
                  this.ctx.stroke();
                }
                if(cFill){
                  this.ctx.beginPath();
                  this.ctx.arc(x,y,radius,startAngle,endAngle);
                  //this.ctx.stroke();
                  this.ctx.fillStyle = this.randRGB();
                  this.ctx.fill();
                }
            }else{
              if(cBorder){
                this.ctx.beginPath();
                this.ctx.arc(x,y,radius,startAngle,endAngle);
                this.ctx.stroke();
              }
              if(cFill){
                this.ctx.beginPath();
                this.ctx.arc(x,y,radius,startAngle,endAngle);
                //this.ctx.stroke();
                this.ctx.fillStyle = cColors[z];
                this.ctx.fill();
              }
            }
          }
        }
    }


    drawTriangle(tnumber:number, tFill: boolean, tBorder: boolean, tMinW:number,tMaxW:number,tMinH:number,tMaxH:number, tColors:[]){
      if (tnumber == 0){
        return
      }else{
        for(let z = 0; z < tnumber; z++){
          let x = this.randInt(0,this.w);
          let y = this.randInt(0,this.h);
          if(tColors[z] == null || tColors == null){
              if(tBorder){
                this.ctx.moveTo(x,y);
                this.ctx.beginPath();
                this.ctx.moveTo(x, y);
                this.ctx.lineTo(x + this.randInt(-tMinW, tMaxW), y + this.randInt(-tMinH, tMaxH));
                this.ctx.lineTo(x + this.randInt(-tMinW, tMaxW), y + this.randInt(-tMinH, tMaxH));
                this.ctx.lineTo(x, y);
                this.ctx.closePath();

              }
              if(tFill){
                this.ctx.beginPath();
                this.ctx.moveTo(x, y);
                this.ctx.lineTo(x + this.randInt(-(tMinW), tMaxW), y + this.randInt(-(tMinH), tMaxH));
                this.ctx.lineTo(x + this.randInt(-(tMinW), tMaxW), y + this.randInt(-(tMinH), tMaxH));
                this.ctx.lineTo(x, y);
                this.ctx.closePath();
                this.ctx.fillStyle = this.randRGB();
                this.ctx.fill();
              }
          }else{
            if(tBorder){
              this.ctx.beginPath();
              this.ctx.moveTo(x, y);
              this.ctx.lineTo(x + this.randInt(-(tMinW), tMaxW), y + this.randInt(-(tMinH), tMaxH));
              this.ctx.lineTo(x + this.randInt(-(tMinW), tMaxW), y + this.randInt(-(tMinH), tMaxH));
              this.ctx.lineTo(x, y);
              this.ctx.closePath();
            }
            if(tFill){
              this.ctx.beginPath();
              this.ctx.moveTo(x, y);
              this.ctx.lineTo(x + this.randInt(-(tMinW), tMaxW), y + this.randInt(-(tMinH), tMaxH));
              this.ctx.lineTo(x + this.randInt(-(tMinW), tMaxW), y + this.randInt(-(tMinH), tMaxH));
              this.ctx.lineTo(x, y);
              this.ctx.closePath();
              this.ctx.fillStyle = tColors[z];
              this.ctx.fill();
            }
          }
        }
      }
    }


  randInt(min:number, max:number){
    if (min > max){
      return;
    }
    return Math.floor((Math.random()*(max-min)))+min;
  }

  randRGB(){
    let r: number = Math.floor((Math.random() * 255));
    let g: number = Math.floor((Math.random() * 255));
    let b: number = Math.floor((Math.random() * 255));
    let rgb = 'rgb(' + r +',' + g + ',' +b +')';
    return rgb;
  }
  randRGBA(){
    let r: number = Math.floor((Math.random() * 255));
    let g: number = Math.floor((Math.random() * 255));
    let b: number = Math.floor((Math.random() * 255));
    let a: number = Math.random();
    let rgb = 'rgb(' + r +',' + g + ',' +b +',' + a +')';
    return rgb;
  }
  randHex(){
    let r: number = Math.floor((Math.random() * 255));
    let g: number = Math.floor((Math.random() * 255));
    let b: number = Math.floor((Math.random() * 255));
    console.log("#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;

    return "#" + r + g + b;
  }
}
