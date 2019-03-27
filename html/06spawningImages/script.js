const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gameObjects = [];

animate();

function animate(){
  if(Math.random()<0.05){
    let gameObject = {};
    gameObject.image = new Image();
    gameObject.image.src = "apple.png";
    gameObject.x = getRandomNumber(canvas.width);
    gameObject.y = -150;
    gameObject.v_y = 5;
    gameObjects.push(gameObject);
  }
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  for(let i = 0; i< gameObjects.length;i++){
    let gameObject = gameObjects[i];
    gameObject.y += gameObject.v_y;
    context.drawImage(gameObject.image,gameObject.x,gameObject.y);
  }
}

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
