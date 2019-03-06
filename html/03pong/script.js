class Ball {
  constructor(x,y) {
    this.x = x;
    this.y = y;

  }

  draw(context){
    context.beginPath();
    context.fillStyle = "rgba(255,255,0,1)"
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

let speedX = 20;
let speedY = 40;


function animate(){
  window.requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  myBall.draw(context);
  myBall.x += speedX;
  myBall.y += speedY;
  if(myBall.y > canvas.height-30){
    speedY = -speedY;
  }
  if(myBall.y <0){
    speedY = -speedY;
  }
  if(myBall.x > canvas.width - 30){
    speedX = -speedX;
  }
  if(myBall.x < 0){
    speedX = -speedX;
  }
}

animate();
