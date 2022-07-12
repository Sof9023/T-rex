
function setup() {
  createCanvas(400,400);
  background("white");
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("#d9d2e9");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("#ffe599");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("#b6d7a8");
  }
  if (keyIsDown(RIGHT_ARROW)){
    background ("#f4cccc");
  }

  
  drawSprites();
}

