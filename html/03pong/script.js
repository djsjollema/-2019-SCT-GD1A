class Ball {
  constructor(x,y) {
    this.x = x;
    this.y = y;

  }

  draw(context){
    context.beginPath();
    context.fillStyle = "rgba(255,255,0,0.5)"
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


function animate(){
  window.requestAnimationFrame(animate);
  //console.log(positionX);
  myBall.draw(context);
  myBall.x = myBall.x + 1;
}

animate();
