var cuadrado;
function setup() {
  createCanvas(400,400);
cuadrado = createSprite (100, 100, 30, 30);

}

function draw() 
{
  background(30);
drawSprites ();
  
if (keyIsDown(DOWN_ARROW)) { 
 cuadrado.position.y = cuadrado.position.y + 2;

}
}



