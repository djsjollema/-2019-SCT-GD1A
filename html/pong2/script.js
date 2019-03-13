class Ball {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
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

let myBall = new Ball(100,100,20,"yellow");
let v_x = 5;
let v_y = 7;

myBall.draw(context);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  myBall.x += v_x;
  myBall.y += v_y;
  myBall.draw(context);
  if(myBall.x < myBall.r || myBall.x > canvas.width - myBall.r){
    v_x = - v_x;
  }
  if(myBall.y < myBall.r || myBall.y > canvas.height - myBall.r){
    v_y = - v_y;
  }
}

animate();
