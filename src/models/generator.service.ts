export class RandGenService{
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
    console.log(a);
    let rgb = 'rgb(' + r +',' + g + ',' +b +',' + a +')';
    return rgb;
  }
  randHex(){
    let r: number = Math.floor((Math.random() * 255));
    let g: number = Math.floor((Math.random() * 255));
    let b: number = Math.floor((Math.random() * 255));
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  randInt(min:number, max:number){
    if (min > max){
      return;
    }
    return Math.floor((Math.random()*(max-min)))+min;
  }
}
