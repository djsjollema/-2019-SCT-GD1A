const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let image = new Image();
image.src = "apple.png";

image.addEventListener('load',()=>{
  animate();
})


function animate(){

  requestAnimationFrame(animate);
  if(Math.random() < 0.1){
    context.drawImage(image,getRandomNumber(canvas.width),getRandomNumber(canvas.height));
  }
}

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
