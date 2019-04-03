const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let wheel = new Image();
wheel.src = "rad_van_fortuin.png";

let myRotation = 0;

wheel.addEventListener('load',()=>{
  animate();

})

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  context.translate(500,500);
  context.rotate(myRotation);
  context.drawImage(wheel,-250,-250,500,500);
  context.resetTransform();
  myRotation += 0.01;
}
