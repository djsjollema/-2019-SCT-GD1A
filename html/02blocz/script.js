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

let myX = getRandomNumber(canvas.width);
let myY = getRandomNumber(canvas.height);

let myBlok = new Bloc(myX,myY,myX+100,myY+100);
myBlok.draw();


function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
