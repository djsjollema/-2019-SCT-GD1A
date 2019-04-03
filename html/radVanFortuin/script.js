const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let wheel = new Image();
wheel.src = "rad_van_fortuin.png";

let myRotation = 0;
let speed =0;

wheel.addEventListener('load',()=>{
  wheel.width = 500;
  wheel.height = 500;
  animate();

})

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  context.translate(canvas.width/2,canvas.height/2);
  context.rotate(myRotation);

  context.drawImage(wheel,-wheel.width/2,-wheel.height/2,wheel.width,wheel.height);
  context.resetTransform();
  myRotation += speed;
  speed *= 0.99;
  if(speed<0.01){
    speed = 0;
  }
}

addEventListener('mousedown',()=>{
  speed = Math.random();
})
