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


myBall.draw(context);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
}

animate();
