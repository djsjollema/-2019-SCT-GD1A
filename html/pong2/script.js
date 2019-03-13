class Paddle {
  constructor(x,y) {
    this.x = x;
    this.y = y
  }
  draw(context){
    context.fillStyle = "black";
    context.fillRect(this.x,this.y,20,200);
  }
}

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

let left = new Paddle(20,100);
let right = new Paddle(canvas.width-40,100)

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
  left.draw(context);
  right.draw(context);
}

animate();

function keyHandler(evt){
  console.log(evt.key);
  switch (evt.key) {
    case "w": left.y -= 5;
      break;
    case "s": left.y += 5;
      break;
    default:

  }

}

window.addEventListener('keydown',keyHandler);
