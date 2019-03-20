class Ball {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.v_x = 0;
    this.v_y = 6;
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

// for(let i= 0; i<100; i++){
//   let myBall = new Ball(getRandomNumber(canvas.width),getRandomNumber(canvas.height),5,"yellow");
//   balls.push(myBall);
//   myBall.draw(context);
// }



function animate(){
  if(Math.random()<0.01){
    let myBall = new Ball(getRandomNumber(canvas.width),-10,20,"yellow");
    balls.push(myBall);
    myBall.draw(context);
  }

  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0; i<balls.length; i++){
    let myBall = balls[i];
    myBall.y += myBall.v_y;
    myBall.draw(context);
    if(myBall.y > canvas.height){
      balls.splice(i,1);
    }
  }
}
animate();

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
