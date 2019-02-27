const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.beginPath();
context.rect(10,10,100,100);
context.closePath();
context.stroke();
context.fill();
