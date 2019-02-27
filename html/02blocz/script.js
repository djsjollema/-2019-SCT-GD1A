class Bloc {
  constructor(x1,y1,x2,y2) {
    this.x1= x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  draw(){
    context.beginPath();
    context.fillStyle = "lightblue";
    context.strokeStyle = "blue";
    context.rect(this.x1,this.y1,this.x2,this.y2);
    context.closePath();
    context.stroke();
    context.fill();
  }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let myBlok = new Bloc(0,0,200,300);
myBlok.draw();

let myBlok2 = new Bloc(400,400,500,600);
myBlok2.draw();
