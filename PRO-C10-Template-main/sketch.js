var sea,ship;
var seaImg,shipImg;
var shipImg1;

function preload(){
 
  //animación del barco
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png"); //cargar animacion
  
  //imagen para el fondo
  seaImg = loadImage("sea.png"); //cargar imagen

}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg); //añadir imagen cargada
  sea.velocityX = -5;
  sea.scale=0.3;

  //movimiento del barco
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1); //añadir animacion cargada
  ship.scale =0.25;
  
}

function draw() {

  background(0);

    //movimiento del fondo
     if (sea.x<-220){
     sea.x=500;
   }

  drawSprites();
  
}
