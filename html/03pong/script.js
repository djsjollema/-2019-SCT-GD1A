class Ball {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  draw(context){
    context.beginPath();
    context.fillStyle = "rgba(0,0,255,1)"
    context.arc(this.x,this.y,30,0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();
  }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let myBall = new Ball(100,100);
myBall.draw(context);

let myBall2 = new Ball(400,500);
myBall2.draw(context);

let speedX = 2;
let speedY = 4;

let speedX2 = 4;
let speedY2 = -3;

function animate(){
  window.requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  myBall.draw(context);
  myBall.x += speedX;
  myBall.y += speedY;


  myBall2.draw(context);
  myBall2.x += speedX2;
  myBall2.y += speedY2;

  if(myBall.y > canvas.height-30){
    speedY = -speedY;
  }
  if(myBall.y < 30){
    speedY = -speedY;
  }
  if(myBall.x > canvas.width - 30){
    speedX = -speedX;
  }
  if(myBall.x < 30){
    speedX = -speedX;
  }

  if(myBall2.y > canvas.height-30){
    speedY2 = -speedY2;
  }
  if(myBall2.y < 30){
    speedY2 = -speedY2;
  }
  if(myBall2.x > canvas.width - 30){
    speedX2 = -speedX2;
  }
  if(myBall2.x < 30){
    speedX2 = -speedX2;
  }
}

animate();
