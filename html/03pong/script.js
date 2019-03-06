class Ball {
  constructor() {

  }

  draw(context){
    context.beginPath();
    context.fillStyle = "rgba(255,255,0,0.5)"
    context.arc(100,100,30,0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();
  }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let myBall = new Ball();
myBall.draw(context);
