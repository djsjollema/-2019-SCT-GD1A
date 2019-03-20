class Ball {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.v_x = 1;
    this.v_y = 1;
    this.color = color;
  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = "3";
    context.fillStyle = this.color;
    context.arc(this.x,this.y,this.r,0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();
  }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let balls = [];

for(let i= 0; i<100; i++){
  let myBall = new Ball(getRandomNumber(canvas.width),getRandomNumber(canvas.height),5,"yellow");
  balls.push(myBall);
  myBall.draw(context);
}



function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0; i<balls.length; i++){
    let myBall = balls[i];
    myBall.x += myBall.v_x;
    myBall.y += myBall.v_y;
    if(myBall.x <0 || myBall.x > canvas.width){
      myBall.v_x = - myBall.v_x;
    }
    if(myBall.y <0 || myBall.y > canvas.height){
      myBall.v_y = - myBall.v_y;
    }
    myBall.draw(context);
  }
}
animate();

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
