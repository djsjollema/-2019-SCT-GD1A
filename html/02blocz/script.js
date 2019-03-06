class Bloc {
  constructor(x1,y1,x2,y2,color) {
    this.x1= x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
  }
  draw(){
    context.beginPath();
    context.fillStyle = this.color;
    console.log(this.color);
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

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}

function animate(){
  let myX = getRandomNumber(canvas.width);
  let myY = getRandomNumber(canvas.height);
  requestAnimationFrame(animate);
  let myColor = "rgb(" + getRandomNumber(255) + "," + getRandomNumber(255) + "," + getRandomNumber(255) + ")";
  let myBlok = new Bloc(myX,myY,10,10,myColor);
  myBlok.draw();
}

animate();
