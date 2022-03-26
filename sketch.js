var sprite


function setup() {
  createCanvas(400,400);
  sprite = createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
  drawSprites()
  if (keyIsDown(RIGHT_ARROW)) {
    sprite.x += 5
  }

  if (keyIsDown(LEFT_ARROW)) {
    sprite.x -= 5
  }
  if (keyIsDown(UP_ARROW)) {
    sprite.y -= 5
  }
  if (keyIsDown(DOWN_ARROW)) {
    sprite.y += 5
  }
}




