var a = {
  x:200, 
  y:200,
  w:100,
  h:100,
  vx:5,
  vy:5
}

function setup() {
  createCanvas(400, 400);
  var ball = createSprite(a.x, a.y, a.w, a.h);
  ball.velocityX = a.vx;
  ball.velocityY = a.vy;
}

function draw() {
  background(220);
  drawSprites();
}