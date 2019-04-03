const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let wheel = new Image();
wheel.src = "rad_van_fortuin.png";

let myRotation = 0;
let speed =0;
let result;
let spinning = false;

let wheelValues = [];
wheelValues.push("bankroet");
wheelValues.push("50");
wheelValues.push("300");
wheelValues.push("250");
wheelValues.push("400");
wheelValues.push("100");
wheelValues.push("200");
wheelValues.push("350");
wheelValues.push("150");
wheelValues.push("300");
wheelValues.push("50");
wheelValues.push("bankroet");
wheelValues.push("250");
wheelValues.push("200");
wheelValues.push("400");
wheelValues.push("150");
wheelValues.push("300");
wheelValues.push("100");
wheelValues.push("350");
wheelValues.push("200");
wheelValues.push("verliesbeurt");
wheelValues.push("100");
wheelValues.push("300");
wheelValues.push("4000");

wheel.addEventListener('load',()=>{
  wheel.width = 500;
  wheel.height = 500;
  animate();

})

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  drawTriangle();
  context.translate(canvas.width/2,canvas.height/2);
  context.rotate(myRotation);

  context.drawImage(wheel,-wheel.width/2,-wheel.height/2,wheel.width,wheel.height);
  context.resetTransform();
  myRotation += speed;
  speed *= 0.99;
  if(speed<0.01){
    speed = 0;
    result = Math.round(myRotation%(2*Math.PI)/(2*Math.PI)*24);
    // console.log(result);
    console.log(wheelValues [24-result]);
    //console.log(myRotation%(2*Math.PI));
  }
}

addEventListener('mousedown',()=>{
  speed = Math.random();
})

function drawTriangle(){
  let triangleWidth =100;
  let triangleHeight = 200;
  context.beginPath();
  context.moveTo(canvas.width/2-triangleWidth/2,canvas.height/2-wheel.height/2-triangleHeight);
  context.lineTo(canvas.width/2+triangleWidth/2,canvas.height/2-wheel.height/2-triangleHeight);
  context.lineTo(canvas.width/2,canvas.height/2-wheel.height/2);
  context.closePath();
  context.fill();

}
